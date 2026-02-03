"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRICING_CONTENT } from "@/lib/content/landing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".pricing-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "center center",
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "back.out(1.2)",
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="pricing" ref={containerRef} className="py-24 md:py-32 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        {PRICING_CONTENT.title}
                    </h2>
                    <p className="text-muted-foreground">{PRICING_CONTENT.footer}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {PRICING_CONTENT.plans.map((plan, i) => (
                        <div
                            key={i}
                            className={cn(
                                "pricing-card flex flex-col p-8 rounded-3xl border transition-all duration-300",
                                plan.highlight
                                    ? "bg-white/5 border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10"
                                    : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/5"
                            )}
                        >
                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-white tracking-tight">
                                    {plan.price}
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                                            plan.highlight ? "bg-primary text-background" : "bg-white/10 text-white"
                                        )}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-muted-foreground text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={cn(
                                    "w-full py-4 rounded-xl text-center font-bold transition-all",
                                    plan.highlight
                                        ? "bg-primary text-background hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                                )}
                            >
                                {plan.button}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
