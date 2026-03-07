'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed w-full z-50 glass-morphism top-0 left-0">
            <div className="premium-container py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
                    Psicologia<span className="text-foreground">Pro</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre mim</Link>
                    <Link href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Especialidades</Link>
                    <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
                    <Link
                        href="#contato"
                        className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
                    >
                        Agendar Sessão
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-2">
                    <Link href="#sobre" className="text-base font-medium py-2" onClick={() => setIsOpen(false)}>Sobre mim</Link>
                    <Link href="#servicos" className="text-base font-medium py-2" onClick={() => setIsOpen(false)}>Especialidades</Link>
                    <Link href="#faq" className="text-base font-medium py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link
                        href="#contato"
                        className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Agendar Sessão
                    </Link>
                </div>
            )}
        </nav>
    );
};
