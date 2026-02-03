"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOCIAL_PROOF_CONTENT } from "@/lib/content/landing";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".proof-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "center center",
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="reviews" ref={containerRef} className="py-24 md:py-32 bg-background relative border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
                        {SOCIAL_PROOF_CONTENT.title}
                    </h2>

                    {/* Metrics */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {SOCIAL_PROOF_CONTENT.metrics.map((metric, i) => (
                            <div key={i} className="proof-item text-center">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {SOCIAL_PROOF_CONTENT.reviews.map((review, i) => (
                        <div
                            key={i}
                            className="proof-item p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                {review.short}
                            </h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                {review.detail}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-sm">{review.name}</div>
                                    <div className="text-xs text-secondary">※ 베타 사용자 후기</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
