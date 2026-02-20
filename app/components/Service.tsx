"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    {
        image: "/product/1.jpg",
        title: "Premium Cut",
        description: "Precision haircut crafted for a sharp, modern look."
    },
    {
        image: "/product/6.jpg",
        title: "Beard Styling",
        description: "Clean lines and expert shaping for a bold finish."
    },
    {
        image: "/product/3.jpg",
        title: "Hair Treatment",
        description: "Revitalize your hair with premium care products."
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
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
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
