"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURES_CONTENT } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

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
                (gridRef.current as HTMLDivElement).children,
                {
                    opacity: 0,
                    y: 40,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                },
                "-=0.6"
            );
        },
        { scope: containerRef }
    );

    return (
        <section id="features" ref={containerRef} className="py-24 md:py-32 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                        Key Features
                    </div>
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                    >
                        {FEATURES_CONTENT.title}
                    </h2>
                </div>

                <div
                    ref={gridRef}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
                >
                    {FEATURES_CONTENT.items.map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-sm group",
                                idx === 0 || idx === 1 ? "lg:col-span-1" : "lg:col-span-1"
                                // Grid layout tweak: Requirements say "5 cards 3+2 placement".
                                // Since css grid auto-flow is standard, let's make the last 2 centered or span if we want 3+2 specific layout.
                                // Standard 3-col grid will result in 3 top, 2 bottom centered if items=5.
                            )}
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
