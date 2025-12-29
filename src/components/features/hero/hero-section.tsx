'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
                    <source src="https://videos.pexels.com/video-files/5532776/5532776-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <section className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center space-y-6"
                >
                    {/* Main Logo replacement for text */}
                    <div className="w-[320px] h-[120px] md:w-[600px] md:h-[220px] relative overflow-hidden transition-transform duration-700 hover:scale-105">
                        <Image
                            src="/logo ngang-02.png"
                            alt="Priméd'Or Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <p className="text-3xl md:text-5xl font-light tracking-wide text-white/90 flex flex-col items-center justify-center gap-2 md:gap-4">
                        <span className="font-forest">TINH HOA QUÀ TẶNG</span>
                        <span className="font-daytonia text-5xl md:text-7xl">Thiên nhiên</span>
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
