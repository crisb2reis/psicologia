'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="pt-32 pb-20 overflow-hidden">
            <div className="premium-container">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary bg-primary/10 rounded-full uppercase">
                            Atendimento Humanizado & Sigilo Absoluto
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Cuidar da sua saúde emocional pode <span className="text-primary italic">transformar</span> sua vida.
                        </h1>
                        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90">
                            Processo terapêutico focado em acolhimento para ansiedade, estresse e autoconhecimento. Encontre um espaço seguro para ser ouvido e compreendido.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#contato"
                                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all w-full sm:w-auto"
                            >
                                Agendar Minha Primeira Sessão
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/5511999999999"
                                className="bg-white border-2 border-slate-100 text-[#25D366] px-8 py-4 rounded-full text-lg font-bold flex items-center hover:bg-slate-50 transition-all w-full sm:w-auto"
                            >
                                <MessageCircle className="mr-2 w-6 h-6 fill-[#25D366]/10" />
                                Falar no WhatsApp
                            </motion.a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                            <div className="flex flex-col items-center lg:items-start text-xs font-bold uppercase tracking-widest leading-none">
                                <span>CRP Ativo</span>
                                <span className="text-primary mt-1">06/XXXXXX</span>
                            </div>
                            <div className="h-4 w-px bg-slate-200"></div>
                            <div className="flex flex-col items-center lg:items-start text-xs font-bold uppercase tracking-widest leading-none">
                                <span>Especialista em</span>
                                <span className="text-primary mt-1">TCC & Humanismo</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
                            {/* Decorative backgrounds */}
                            <div className="absolute inset-0 bg-primary/5 rounded-[40px] rotate-6 group-hover:rotate-1 transition-transform"></div>
                            <div className="absolute inset-0 bg-slate-100 rounded-[40px] -rotate-3 group-hover:rotate-1 transition-transform"></div>

                            <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/hero-image.png"
                                    alt="Psicóloga Profissional"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl glass-morphism border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary font-bold">10+</span>
                                    </div>
                                    <div className="flex flex-col pr-4">
                                        <span className="text-sm font-bold leading-tight">Anos de</span>
                                        <span className="text-xs text-muted font-medium">Experiência Clinica</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
