import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/content/landing";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-black tracking-tight text-white mb-6 block">
                            강원 AI
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                            강원도 여행을 ‘취향 기반’으로 10초 만에 설계하고, <br />
                            숙소/맛집/코스까지 한 번에 저장·공유하세요.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6">바로가기</h4>
                        <ul className="space-y-3">
                            {["기능 소개", "사용법", "후기", "요금제"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6">지원</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href="mailto:contact@kangwon.ai"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Gangwon AI. All rights reserved.
                        </p>
                        <noscript>
                            <p className="text-xs text-primary/70">
                                JavaScript가 비활성화되어 있습니다. 문의는 <a href="mailto:contact@kangwon.ai" className="underline">contact@kangwon.ai</a>로 부탁드립니다.
                            </p>
                        </noscript>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
