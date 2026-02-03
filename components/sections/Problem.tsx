"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROBLEM_CONTENT } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "center center",
                    scrub: false,
                },
            });

            tl.from(titleRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
            }).from(
                (cardsRef.current as HTMLDivElement).children,
                {
                    opacity: 0,
                    y: 40,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                },
                "-=0.5"
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            id="problem"
            ref={containerRef}
            className="py-24 md:py-32 bg-background relative z-10"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
                    >
                        {PROBLEM_CONTENT.title}
                    </h2>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROBLEM_CONTENT.items.map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm",
                                "flex flex-col items-start gap-4"
                            )}
                        >
                            <div className="p-3 rounded-lg bg-danger/10 text-danger mb-2 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
