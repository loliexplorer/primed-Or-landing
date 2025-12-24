'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Re-using cn utility

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop', href: 'https://primedor.com/' },
        { name: 'Our Story', href: '#philosophy' },
        { name: 'Ingredients', href: '#ingredients' },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-[#0E0B0A]/80 backdrop-blur-md py-4 border-white/5"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo Group */}
                    <Link href="/" className="flex flex-col items-center z-50 relative group">
                        <div className="w-12 h-12 mb-1 relative overflow-hidden transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt="Primed'Or Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold text-white tracking-tight">
                            Primed&apos;Or
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isExternal = link.href.startsWith('http');
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="text-sm uppercase tracking-widest text-white/80 hover:text-[var(--primary-gold)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href="https://primedor.com/collections/all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[var(--primary-gold)] transition-colors"
                        >
                            <ShoppingBag className="w-5 h-5" />
                        </a>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-4 md:hidden z-50 relative">
                        <a
                            href="https://primedor.com/collections/all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[var(--primary-gold)] transition-colors"
                        >
                            <ShoppingBag className="w-5 h-5" />
                        </a>
                        <button
                            className="text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#0E0B0A] flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => {
                            const isExternal = link.href.startsWith('http');
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="font-serif text-3xl text-white hover:text-[var(--primary-gold)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
