import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#0E0B0A] text-[#F9F7F5] py-16 border-t border-white/10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="font-serif text-3xl font-bold tracking-tight text-[var(--primary-gold)]">
                        Primed&apos;Or
                    </Link>
                    <p className="text-stone-400 font-light text-sm leading-relaxed max-w-sm">
                        Tinh hoa quà tặng từ thiên nhiên. Chúng tôi tin rằng mỗi mùi hương là một câu chuyện, và mỗi món quà là một lời chúc an lành.
                    </p>
                    <div className="flex gap-4 text-stone-400">
                        <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Links Column */}
                <div className="space-y-6">
                    <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">Khám Phá</h4>
                    <ul className="space-y-4 text-sm text-stone-400">
                        <li><a href="#collections" className="hover:text-[var(--primary-gold)] transition-colors">Bộ Sưu Tập</a></li>
                        <li><a href="#philosophy" className="hover:text-[var(--primary-gold)] transition-colors">Câu Chuyện</a></li>
                        <li><a href="#ingredients" className="hover:text-[var(--primary-gold)] transition-colors">Nguyên Liệu</a></li>
                        <li><a href="#" className="hover:text-[var(--primary-gold)] transition-colors">Chính Sách Vận Chuyển</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="space-y-6">
                    <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">Newsletter</h4>
                    <p className="text-stone-400 font-light text-sm">
                        Đăng ký để nhận những ưu đãi và câu chuyện mùi hương mới nhất.
                    </p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--primary-gold)] transition-colors rounded-sm"
                        />
                        <button className="bg-[var(--primary-gold)] text-[#0E0B0A] px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[var(--primary-gold-hover)] transition-colors rounded-sm">
                            Đăng Ký
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-wider">
                <p>&copy; 2025 Primed&apos;Or. All rights reserved.</p>
                <p>Designed with Passion.</p>
            </div>
        </footer>
    );
}
