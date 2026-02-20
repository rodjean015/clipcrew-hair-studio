"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    {
        image: "/new/c.jpeg",
        title: "Clothing",
        description: "Stylish and comfortable apparel designed to elevate your everyday look."
    },
    {
        image: "/new/w.jpeg",
        title: "Wind Breaker",
        description: "Lightweight and durable outerwear built to protect you from wind and weather."
    },
    {
        image: "/new/r.jpeg",
        title: "Accessories",
        description: "Trendy and functional accessories to complete and enhance your outfit."
    },
];

export default function Service() {
    return (
        <section className="py-28 bg-black" id="about">
            <div className="w-full px-6 text-center">
                {/* Reduced gap */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-900 border border-zinc-700
                                       overflow-hidden transition-all duration-500
                                       hover:border-zinc-600"
                        >
                            {/* Image with padding */}
                            <div className="p-8">
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-4 text-center">
                                <h4 className="text-xl font-light tracking-wide text-white mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto">
                                    {item.description}
                                </p>
                            </div>

                            {/* Subtle hover glow */}
                            <div className="pointer-events-none absolute inset-0
                                            opacity-0 group-hover:opacity-100 transition-opacity
                                            shadow-[0_0_60px_rgba(255,255,255,0.05)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}