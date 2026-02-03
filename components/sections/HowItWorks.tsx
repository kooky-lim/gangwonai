"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOW_IT_WORKS_CONTENT } from "@/lib/content/landing";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
    const containerRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "center center",
                    scrub: false,
                },
            });

            tl.from((stepsRef.current as HTMLDivElement).children, {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="how-it-works" ref={containerRef} className="py-24 md:py-32 bg-muted/10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16">
                    {HOW_IT_WORKS_CONTENT.title}
                </h2>

                <div ref={stepsRef} className="grid md:grid-cols-3 gap-8 relative">
                    {HOW_IT_WORKS_CONTENT.steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold text-2xl mb-6 shadow-lg shadow-primary/20">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>

                            {/* Connector Line (Desktop only, except last item) */}
                            {idx !== 2 && (
                                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-white/10 to-transparent -z-10" />
                            )}
                        </div>
                    ))}
                </div>

                <p className="mt-16 text-lg text-secondary font-medium animate-pulse">
                    {HOW_IT_WORKS_CONTENT.footer}
                </p>
            </div>
        </section>
    );
}
