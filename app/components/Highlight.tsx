export default function Highlight() {
    return (
        <section className="relative pt-24 h-[60vh] w-full overflow-hidden" id="home">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/urban-clothes.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">
                    <h1 className="text-3xl md:text-6xl text-white mb-4 tracking-tight opacity-0 animate-fadeIn">
                        Urban essentials.<br className="hidden md:block" />
                        Elevated.
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed opacity-0 animate-fadeIn delay-200">
                        Where street culture meets modern design.
                    </p>
                </div>
            </div>
        </section>
    );
}
