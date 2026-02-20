"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    {
        image: "/about-us/1.jpeg",
        title: "Modern Layout",
        description: "A thoughtfully designed open layout that blends functionality with contemporary elegance."
    },
    {
        image: "/about-us/2.jpeg",
        title: "Luxury Styling Stations",
        description: "Premium mirrors, lighting, and seating crafted to create a refined and comfortable styling experience."
    },
    {
        image: "/about-us/3.jpeg",
        title: "Ambient Lighting",
        description: "Warm, balanced lighting that enhances the atmosphere while ensuring perfect visibility for precision styling."
    },
    {
        image: "/about-us/4.jpeg",
        title: "Minimalist Aesthetic",
        description: "Clean lines, neutral tones, and modern textures that create a calm and sophisticated salon environment."
    },
    {
        image: "/about-us/5.jpeg",
        title: "Comfortable Waiting Area",
        description: "An inviting lounge space designed with plush seating and stylish décor for ultimate client relaxation."
    },
    {
        image: "/about-us/6.jpeg",
        title: "Premium Finishes",
        description: "High-quality materials, sleek surfaces, and elegant details that elevate the overall interior experience."
    },
];

export default function Features() {
    return (
        <section className="py-28 bg-black" id="feature">
            <div className="w-full max-w-7xl mx-auto text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6"
                >
                    About Us
                </motion.h3>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mx-auto mb-12" />

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
                                <div className="relative h-[300px] overflow-hidden">
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
