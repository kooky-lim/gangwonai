"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_CONTENT } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 md:py-32 bg-muted/10 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center">
                    {FAQ_CONTENT.title}
                </h2>

                <div className="space-y-4">
                    {FAQ_CONTENT.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="flex items-center justify-between w-full p-6 text-left"
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-panel-${idx}`}
                                id={`faq-btn-${idx}`}
                            >
                                <span className="text-lg font-medium text-white">{item.q}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-muted-foreground transition-transform duration-300",
                                        openIndex === idx && "rotate-180"
                                    )}
                                />
                            </button>

                            <div
                                id={`faq-panel-${idx}`}
                                role="region"
                                aria-labelledby={`faq-btn-${idx}`}
                                className={cn(
                                    "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                                    openIndex === idx ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                )}
                                aria-hidden={openIndex !== idx}
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
