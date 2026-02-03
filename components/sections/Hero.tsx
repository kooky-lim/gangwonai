"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_CONTENT } from "@/lib/content/landing";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Text Reveal
        tl.from(textRef.current?.children ? Array.from(textRef.current.children) : [], {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
        });

        // Mockup Entry
        tl.from(mockupRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
            delay: -0.8
        });

        // Mockup Floating Loop
        gsap.to(mockupRef.current, {
            y: "-=15",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24"
        >
            {/* Background Gradient (Ocean/Nature Feel) */}
            <div className="absolute inset-0 -z-10 bg-background" />
            <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-background -z-10 opacity-80" />

            {/* Abstract Nature Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Text Content */}
                    <div ref={textRef} className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {HERO_CONTENT.badge}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-6 text-white text-balance whitespace-pre-line">
                            {HERO_CONTENT.headline}
                        </h1>

                        <div className="text-lg md:text-xl text-muted-foreground mb-8 text-balance space-y-1">
                            {HERO_CONTENT.subHeadline.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link
                                href="#download"
                                className={cn(
                                    "group bg-primary text-background px-8 py-4 rounded-full text-lg font-bold transition-all",
                                    "hover:shadow-[0_0_20px_-5px_var(--primary)] hover:scale-105"
                                )}
                            >
                                {HERO_CONTENT.primaryCta}
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/10 hover:bg-white/5 transition-colors"
                            >
                                {HERO_CONTENT.secondaryCta}
                            </Link>
                        </div>

                        {/* Trust Bar */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 pt-8 border-t border-white/5">
                            {HERO_CONTENT.trustBar.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Mockup */}
                    <div className="lg:w-1/2 w-full max-w-[500px] lg:max-w-none perspective-[2000px]">
                        <div ref={mockupRef} className="relative aspect-auto max-h-[800px] rounded-[3rem] shadow-2xl overflow-hidden mx-auto lg:mr-0 lg:ml-auto transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/images/hero_app_ui.png"
                                alt="Gangwon AI App Interface"
                                width={500}
                                height={1000}
                                className="w-full h-auto object-cover"
                                priority
                            />

                            {/* Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10 rounded-[3rem]" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
        </section>
    );
}
