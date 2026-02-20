"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/product/8.jpg",
    "/product/2.jpg",
    "/product/3.jpg",
    "/product/4.jpg",
    "/product/5.jpg",
    "/product/6.jpg",
    "/product/7.jpg",
    "/product/1.jpg",
];


export default function Clothing() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return;

        const cardWidth = 320 + 24; // width + gap
        sliderRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <section
            className="relative isolate py-28 bg-black overflow-hidden"
            id="clothing"
        >

            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6"
                >
                    Highlights
                </motion.h3>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mx-auto mb-12" />
            </div>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 border border-white/20 text-white hover:bg-black transition"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 border border-white/20 text-white hover:bg-black transition"
                >
                    <ChevronRight size={28} />
                </button>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide px-16"
                >
                    {[...images, ...images].map((src, i) => (
                        <div
                            key={i}
                            className="min-w-[260px] md:min-w-[320px] h-130 relative overflow-hidden bg-zinc-800 flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt="Product image"
                                fill
                                className="object-cover"
                                priority={i < 4}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
