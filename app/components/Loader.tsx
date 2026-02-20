"use client";

import Image from "next/image";

export default function Loader({ scaleOut }: { scaleOut: boolean }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-white/5 to-black/70 -z-10" />

            {/* Scale + Fade container */}
            <div
                className={`relative flex flex-col items-center gap-6 transition-all duration-700 ease-in-out ${scaleOut ? "scale-150 opacity-0" : "scale-100 opacity-100"
                    }`}
            >
                {/* Spinner with logo inside */}
                <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* Spinner Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/20 border-t-yellow-600 animate-spin" />

                    {/* Logo */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/CLIPCREW.jpg"
                            alt="ClipCrew Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Loading Text */}
                <div className="text-white text-lg font-semibold tracking-widest">
                    Loading...
                </div>
            </div>
        </div>
    );
}
