'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#0E0B0A] text-[#F9F7F5]">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 select-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-50"
                >
                    {/* Placeholder source - Using a remote Pexels video for Dev environment since local file is missing */}
                    <source src="https://videos.pexels.com/video-files/5532776/5532776-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <section className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--primary-gold)] tracking-tight">
                        Primed&apos;Or
                    </h1>
                    <p className="font-sans text-lg md:text-2xl font-light tracking-[0.2em] text-white/90 uppercase">
                        Tinh hoa Quà tặng Thiên nhiên
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
