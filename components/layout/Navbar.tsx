"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/content/landing";
import { useUIStore } from "@/lib/store";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openContact } = useUIStore();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-white hover:text-primary transition-colors">
                    강원 AI
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={openContact}
                        className="px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer"
                    >
                        도입 문의
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-background/95 backdrop-blur-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 border-t border-white/10">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <Link
                            href="#download"
                            className="w-full text-center px-5 py-4 bg-primary text-background rounded-xl text-base font-bold hover:bg-primary/90 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            APP 설치하기
                        </Link>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openContact();
                            }}
                            className="w-full text-center px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-base font-bold hover:bg-white/10 transition-colors"
                        >
                            도입 문의
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
