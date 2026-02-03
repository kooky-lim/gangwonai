"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { z } from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    company: z.string().min(1, "회사/기관명을 입력해주세요.").max(50, "회사명은 50자 이내로 입력해주세요."),
    name: z.string().min(1, "담당자명을 입력해주세요.").max(20, "담당자명은 20자 이내로 입력해주세요."),
    email: z.string().email("올바른 이메일 주소를 입력해주세요.").max(100, "이메일은 100자 이내로 입력해주세요."),
    message: z.string().min(10, "문의 내용은 최소 10자 이상 입력해주세요.").max(1000, "문의 내용은 1000자 이내로 입력해주세요."),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactModal() {
    const { isContactOpen, closeContact, openContact } = useUIStore();
    const [formData, setFormData] = useState<FormData>({
        company: "",
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const handleOpen = () => {
            setIsError(false);
            setIsSuccess(false);
            openContact();
        };
        window.addEventListener("open-contact", handleOpen);
        return () => window.removeEventListener("open-contact", handleOpen);
    }, [openContact]);

    if (!isContactOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name as keyof FormData]) {
            setErrors({ ...errors, [e.target.name]: undefined });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = formSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: any = {};
            // Use result.error.issues or catch the error if property access is tricky
            if ('issues' in result.error) {
                result.error.issues.forEach((err) => {
                    fieldErrors[err.path[0]] = err.message;
                });
            } else {
                // Fallback or just cast
                (result.error as any).errors?.forEach((err: any) => {
                    fieldErrors[err.path[0]] = err.message;
                })
            }
            setErrors(fieldErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeContact}
            />

            <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={closeContact}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
                    aria-label="모달 닫기"
                >
                    <X className="w-6 h-6" />
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6 animate-in zoom-in">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 id="modal-title" className="text-2xl font-bold text-white mb-2">문의가 접수되었습니다!</h3>
                        <p className="text-muted-foreground mb-8">
                            담당자가 확인 후 입력하신 이메일로<br />빠르게 연락드리겠습니다.
                        </p>
                        <button
                            onClick={closeContact}
                            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                        >
                            닫기
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 id="modal-title" className="text-2xl font-bold text-white mb-2">도입 문의</h2>
                        <p className="text-muted-foreground mb-8 text-sm">
                            강원 AI 도입을 위한 상담을 도와드립니다.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-xs font-medium text-muted-foreground">회사/기관명</label>
                                    <input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={cn(
                                            "w-full bg-white/5 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                                            errors.company ? "border-danger/50" : "border-white/10 focus:border-primary"
                                        )}
                                        placeholder="강원도청"
                                        required
                                        maxLength={50}
                                    />
                                    {errors.company && <p className="text-xs text-danger">{errors.company}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">담당자명</label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={cn(
                                            "w-full bg-white/5 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                                            errors.name ? "border-danger/50" : "border-white/10 focus:border-primary"
                                        )}
                                        placeholder="홍길동"
                                        required
                                        maxLength={20}
                                    />
                                    {errors.name && <p className="text-xs text-danger">{errors.name}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">이메일</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full bg-white/5 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                                        errors.email ? "border-danger/50" : "border-white/10 focus:border-primary"
                                    )}
                                    placeholder="contact@kangwon.ai"
                                    required
                                    maxLength={100}
                                />
                                {errors.email && <p className="text-xs text-danger">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-medium text-muted-foreground">문의 내용</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={cn(
                                        "w-full bg-white/5 border rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                                        errors.message ? "border-danger/50" : "border-white/10 focus:border-primary"
                                    )}
                                    placeholder="도입하고 싶은 서비스나 궁금한 점을 적어주세요."
                                    required
                                    minLength={10}
                                    maxLength={1000}
                                />
                                {errors.message && <p className="text-xs text-danger">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        전송 중...
                                    </>
                                ) : (
                                    "문의하기"
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
