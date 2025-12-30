'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-background text-foreground">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 select-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-40"
                >
                    <source src="https://videos.pexels.com/video-files/5532776/5532776-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
            </div>

            {/* Content */}
            <section className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center space-y-0"
                >
                    {/* Main Logo centerpiece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-[400px] h-[180px] md:w-[1000px] md:h-[400px] relative overflow-hidden transition-transform duration-1000 hover:scale-105"
                    >
                        <Image
                            src="/8.png"
                            alt="Priméd'Or Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="text-brand-brown flex flex-col items-center justify-center gap-1 md:gap-2 -mt-16 md:-mt-32"
                    >
                        <span className="font-forest text-xl md:text-2xl tracking-[0.2em]">TINH HOA QUÀ TẶNG</span>
                        <span className="font-daytonia text-4xl md:text-6xl">Thiên nhiên</span>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
