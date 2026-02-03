"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, MapPin, Clock } from "lucide-react";
import { SOLUTION_CONTENT } from "@/lib/content/landing";

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
    const containerRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    scrub: false,
                },
            });

            tl.from(leftRef.current, {
                opacity: 0,
                x: -50,
                duration: 0.8,
                ease: "power3.out",
            }).from(
                rightRef.current,
                {
                    opacity: 0,
                    x: 50,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            );
        },
        { scope: containerRef }
    );

    return (
        <section id="solution" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: Text */}
                    <div ref={leftRef} className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                            AI Travel Planner
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                            {SOLUTION_CONTENT.title}
                        </h2>
                        <ul className="space-y-6">
                            {SOLUTION_CONTENT.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <span className="text-lg text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: UI Mockup (Static Result Card) */}
                    <div ref={rightRef} className="lg:w-1/2 w-full">
                        <div className="relative bg-background border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 rounded-full text-background font-bold text-sm shadow-lg shadow-primary/20">
                                추천 결과 예시
                            </div>

                            {/* Timeline UI */}
                            <div className="space-y-6">
                                {/* Day 1 Header */}
                                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                    <h3 className="text-white font-bold text-lg">Day 1. 속초 힐링 코스</h3>
                                    <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">2024.06.15</span>
                                </div>

                                {/* Timeline Items */}
                                {[
                                    { time: "10:30", title: "속초 해수욕장", type: "관광", badge: "20분 이동" },
                                    { time: "12:00", title: "항아리 물회", type: "맛집", badge: "도보 5분" },
                                    { time: "14:00", title: "바다뷰 카페 칠성", type: "카페", badge: "차량 10분" }
                                ].map((slot, i) => (
                                    <div key={i} className="flex gap-4 relative">
                                        {/* Line */}
                                        {i !== 2 && <div className="absolute left-[2.5rem] top-8 bottom-[-1.5rem] w-0.5 bg-white/10" />}

                                        <div className="w-20 text-right pt-1">
                                            <span className="text-sm font-mono text-muted-foreground">{slot.time}</span>
                                        </div>
                                        <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-xs font-semibold text-secondary">{slot.type}</span>
                                                <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-black/40 px-2 py-0.5 rounded-full">
                                                    <MapPin className="w-3 h-3" />
                                                    {slot.badge}
                                                </div>
                                            </div>
                                            <h4 className="text-white font-medium">{slot.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
