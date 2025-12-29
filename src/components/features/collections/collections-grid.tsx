'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { collectionsData } from './collections-data';
import { ArrowRight } from 'lucide-react';

export function CollectionsSection() {
    return (
        <SectionContainer className="bg-[#F9F7F5] text-[#0E0B0A]" id="collections">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="font-daytonia text-[var(--primary-gold)] text-2xl">
                    Discover
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-[var(--accent-sage)]">
                    Bộ Sưu Tập
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {collectionsData.map((collection, index) => (
                    <motion.div
                        key={collection.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="group"
                    >
                        <Link
                            href={collection.link}
                            className="block h-full cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${collection.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Overlay Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button className="bg-white/90 backdrop-blur-sm text-[var(--accent-sage)] px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-[#F9F7F5] transition-colors flex items-center gap-2">
                                        Khám phá <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center space-y-2">
                                <h3 className="font-serif text-2xl md:text-3xl text-[var(--accent-sage)] group-hover:text-[var(--primary-gold)] transition-colors duration-300">
                                    {collection.title}
                                </h3>
                                <p className="text-[var(--primary-gold)] text-sm uppercase tracking-wider font-medium">
                                    {collection.vietnameseTitle}
                                </p>
                                <p className="text-stone-500 font-light text-sm max-w-xs mx-auto line-clamp-2 group-hover:text-stone-800 transition-colors">
                                    {collection.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
}
