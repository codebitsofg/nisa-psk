"use client";

import {Link} from '@/i18n/routing';
import React, { useState } from 'react'
import {useTranslations} from 'next-intl';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const t = useTranslations("navigation");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "/#hakkimda", label: t("about") },
        { href: "/#hizmetler", label: t("services") },
        { href: "/#blog", label: t("blog") },
        { href: "/#iletisim", label: t("contact") },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex h-full items-center gap-4">
                        <Link href="/" className="text-lg font-bold text-primary-text hover:text-accent transition-colors font-serif-rewrite">
                            <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className='h-12 sm:h-16 w-auto' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="flex space-x-2 border-l pl-4 border-gray-200">
                            <Link href="/" locale="tr" className="text-sm font-semibold text-gray-500 hover:text-accent">TR</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/" locale="de" className="text-sm font-semibold text-gray-500 hover:text-accent">DE</Link>
                        </div>
                        
                        <Link href="/#randevu" className="bg-accent text-white px-8 py-2 rounded-lg hover:bg-primary transition-colors font-semibold text-md text-center">
                            {t("appointment")}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-primary-text hover:text-accent p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-4 text-base font-bold text-primary-text hover:bg-gray-50 hover:text-accent transition-colors border-b border-gray-50 last:border-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="flex items-center gap-4 px-3 py-4 border-b border-gray-50">
                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{t("language") || "Dil"}:</span>
                            <Link href="/" locale="tr" onClick={() => setIsMenuOpen(false)} className="text-md font-bold text-gray-700 hover:text-accent">TR</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/" locale="de" onClick={() => setIsMenuOpen(false)} className="text-md font-bold text-gray-700 hover:text-accent">DE</Link>
                        </div>
                        
                        <div className="pt-4">
                            <Link 
                                href="/#randevu" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full bg-accent text-white px-4 py-4 rounded-xl text-center font-bold text-lg shadow-lg"
                            >
                                {t("appointment")}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation