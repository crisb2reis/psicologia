'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 py-24 border-t border-slate-100 rounded-t-[60px]">
            <div className="premium-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
                            Psicologia<span className="text-foreground">Pro</span>
                        </Link>
                        <p className="text-muted text-sm font-medium leading-relaxed mt-6 mb-8 opacity-70">
                            Transformando vidas através do autoconhecimento e cuidado humanizado. Um espaço de cura e escuta ativa.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 tracking-tight">Sobre mim</h4>
                        <ul className="space-y-4">
                            <li><Link href="#sobre" className="text-muted hover:text-primary transition-all font-medium text-sm">Biografia</Link></li>
                            <li><Link href="#sobre" className="text-muted hover:text-primary transition-all font-medium text-sm">Formação Acadêmica</Link></li>
                            <li><Link href="#servicos" className="text-muted hover:text-primary transition-all font-medium text-sm">Como Trabalho</Link></li>
                            <li><Link href="#servicos" className="text-muted hover:text-primary transition-all font-medium text-sm">Tabela de CRP/Ética</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 tracking-tight">Onde Atendo</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-muted font-medium text-sm leading-relaxed">
                                    Edifício Health Center, Av. Paulista, 1000 - Bela Vista, São Paulo/SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-muted font-medium text-sm">contato@psicologiapro.com.br</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-muted font-medium text-sm">(11) 99999-9999</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 tracking-tight">Informativo CRP</h4>
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Sigilo Profissional</p>
                            <p className="text-xs text-muted font-medium leading-relaxed opacity-70">
                                O sigilo é dever do psicólogo (Art. 9º - Código de Ética), visando a proteção do direito à intimidade do paciente.
                            </p>
                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-3 text-red-400">
                                <Heart className="w-4 h-4 fill-current" />
                                <span className="text-[10px] font-black uppercase tracking-tight">Cuidado Humanizado</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                    <p className="text-xs font-bold uppercase tracking-widest">
                        © 2024 PsicologiaPro. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary">Políticas de Privacidade</Link>
                        <Link href="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group flex items-center gap-2 group"
        >
            <div className="w-6 h-6 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap font-bold text-sm pr-2">
                Como posso te ajudar?
            </span>
            {/* Ping animation effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
        </a>
    )
}
