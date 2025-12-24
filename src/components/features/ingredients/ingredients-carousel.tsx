'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { ingredientsData } from './ingredients-data';

export function IngredientsSection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        if (carousel.current) {
            // Calculate drag constraints: total width - visible width
            // We add some padding-right (e.g. 100px) to allow the last card to be fully visible
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <SectionContainer className="bg-[#0E0B0A] text-[#F9F7F5] overflow-hidden py-24" id="ingredients">
            <div className="mb-12 px-4 md:px-0 lg:max-w-4xl">
                <span className="text-[var(--primary-gold)] uppercase tracking-[0.2em] text-sm font-medium">
                    From Earth to Soul
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4">
                    Tinh Hoa Nguyên Bản
                </h2>
                <p className="mt-6 text-stone-400 font-light max-w-2xl text-lg">
                    Chúng tôi đi khắp thế giới để tìm kiếm những nguyên liệu tinh khiết nhất. Mỗi thành phần đều kể một câu chuyện về vùng đất và con người nơi nó sinh ra.
                </p>
            </div>

            {/* Slider Area */}
            <div className="pl-4 md:pl-0">
                <motion.div
                    ref={carousel}
                    className="cursor-grab overflow-hidden active:cursor-grabbing"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 md:gap-8"
                        style={{ x }}
                    >
                        {ingredientsData.map((ingredient) => (
                            <motion.div
                                key={ingredient.id}
                                className="relative h-[400px] w-[300px] md:h-[500px] md:w-[350px] shrink-0 overflow-hidden rounded-sm group select-none"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${ingredient.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                        {ingredient.name}
                                    </h3>
                                    <p className="text-[var(--primary-gold)] text-sm uppercase tracking-wider mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {ingredient.vietnameseName}
                                    </p>

                                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 delay-100">
                                        <p className="text-white/90 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {ingredient.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </SectionContainer>
    );
}
