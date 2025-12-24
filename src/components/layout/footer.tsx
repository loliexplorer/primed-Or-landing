import { Facebook, Instagram, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
                        <a href="https://www.facebook.com/profile.php?id=61577689154811" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="https://www.instagram.com/primedor.vn/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="https://shopee.vn/primedor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><ShoppingBag className="w-5 h-5" /></a>
                        <a href="https://www.tiktok.com/@primedorvn?_t=ZS-8yP0DBZe3D5&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.44-.01.52.02 1.03.11 1.54.24 1.1 1.08 2.01 2.1 2.35.6.22 1.25.26 1.89.21 1.17-.11 2.21-.86 2.69-1.92.21-.4.32-.83.33-1.27.02-4.14-.01-8.28.02-12.42z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Links Column */}
                <div className="space-y-6">
                    <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">Khám Phá</h4>
                    <ul className="space-y-4 text-sm text-stone-400">
                        <li><a href="https://primedor.com/collections/all" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-gold)] transition-colors">Bộ Sưu Tập</a></li>
                        <li><a href="https://primedor.com/pages/nha-sang-lap-va-triet-ly-san-pham" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-gold)] transition-colors">Câu Chuyện</a></li>
                        <li><a href="https://primedor.com/blogs/news/thanh-phan-tu-nhien-trong-cham-soc-da-danh-gia-hieu-qua-va-loi-ich" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-gold)] transition-colors">Nguyên Liệu</a></li>
                        <li><a href="https://primedor.com/pages/chinh-sach-van-chuyen" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-gold)] transition-colors">Chính Sách Vận Chuyển</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="space-y-6">
                    <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">Newsletter</h4>
                    <p className="text-stone-400 font-light text-sm italic">
                        Tham gia để nhận những ưu đãi và những câu chuyện mới nhất.
                    </p>
                    <a
                        href="https://primedor.com/account/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[var(--primary-gold)] text-[#0E0B0A] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[var(--primary-gold-hover)] transition-all duration-300 rounded-sm text-center shadow-lg shadow-[var(--primary-gold)]/10"
                    >
                        Đăng Ký Thành Viên
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-wider">
                <p>&copy; 2025 Primed&apos;Or. All rights reserved.</p>
                <p>Designed with Passion.</p>
            </div>
        </footer>
    );
}
