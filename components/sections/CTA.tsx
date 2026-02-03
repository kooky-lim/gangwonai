"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FINAL_CTA_CONTENT } from "@/lib/content/landing";
import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { openContact } = useUIStore();

    useGSAP(
        () => {
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom bottom",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            id="cta"
            ref={containerRef}
            className="py-24 md:py-32 relative overflow-hidden bg-background"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <div ref={contentRef} className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 whitespace-pre-line leading-tight">
                        {FINAL_CTA_CONTENT.title}
                    </h2>

                    <p className="text-xl text-muted-foreground mb-12">
                        {FINAL_CTA_CONTENT.subHeadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#download"
                            className={cn(
                                "w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-background font-bold text-lg transition-all",
                                "hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                            )}
                        >
                            {FINAL_CTA_CONTENT.primaryCta}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                            onClick={openContact}
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-lg transition-all"
                        >
                            {FINAL_CTA_CONTENT.secondaryCta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
