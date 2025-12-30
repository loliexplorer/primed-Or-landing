'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { philosophyContent } from './content';

export function PhilosophySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <SectionContainer className="bg-background text-brand-brown overflow-hidden" id="philosophy">
            <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 order-2 lg:order-1"
                >
                    <div className="space-y-4">
                        <span className="font-daytonia text-primary-gold text-2xl">
                            {philosophyContent.subHeading}
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-brown">
                            {philosophyContent.heading}
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg font-light leading-relaxed text-brand-brown/90">
                        {philosophyContent.body.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-gold/30">
                        {philosophyContent.stats.map((stat, idx) => (
                            <div key={idx} className="text-center lg:text-left">
                                <div className="font-serif text-2xl md:text-3xl text-primary-gold mb-1">
                                    {stat.value}
                                </div>
                                <span className="font-daytonia text-primary-gold text-2xl">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Image / Visual - Parallax Effect */}
                <div className="relative h-[500px] md:h-[700px] w-full order-1 lg:order-2">
                    <motion.div style={{ y }} className="absolute inset-0">
                        {/* 
                  Using a placeholder div for now. 
                  In production, this would be <Image /> with object-cover.x
                */}
                        <div className="h-full w-full bg-[#E5E0D8] relative overflow-hidden rounded-sm">
                            {/* Abstract Shape or Image Placeholder */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 hover:scale-105"
                                style={{ backgroundImage: "url('/philosophy.jpg')" }}
                            />

                            {/* Decorative border */}
                            <div className="absolute inset-4 border border-primary-gold/30 z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionContainer>
    );
}
