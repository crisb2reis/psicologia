'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, BookOpen, Clock, Heart } from 'lucide-react';

const stats = [
    { icon: Award, label: "Formação", value: "USP & PUC-SP" },
    { icon: Clock, label: "Experiência", value: "+10 Anos" },
    { icon: BookOpen, label: "Pacientes", value: "+500 Atendidos" },
];

export const About = () => {
    return (
        <section id="sobre" className="py-24">
            <div className="premium-container">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Detailed Stats */}
                    <div className="flex-1 w-full order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center"
                                >
                                    <s.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <p className="text-sm font-bold text-muted uppercase tracking-widest">{s.label}</p>
                                    <p className="text-xl font-extrabold mt-1 text-primary">{s.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                                Um espaço seguro para você <span className="text-primary italic">ser quem você é.</span>
                            </h2>
                            <p className="text-muted text-lg font-medium leading-relaxed">
                                Minha missão é oferecer suporte psicológico especializado, baseado em evidências e empatia. Entendo que cada jornada é única e merece um olhar cuidadoso.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Atendimento ético e sigiloso",
                                    "Abordagem Humanista & TCC",
                                    "Desenvolvimento de autocompaixão",
                                    "Foco em bem-estar duradouro",
                                    "Sessões online e presenciais",
                                    "Suporte entre sessões"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                                        <span className="font-semibold text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <p className="text-sm italic text-muted font-medium mb-4">
                                    "A terapia não é sobre 'consertar' pessoas, mas sobre ajudá-las a florescer."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary group-hover:bg-primary/90 rounded-full flex items-center justify-center text-white">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-tight">Registro CRP</p>
                                        <p className="text-xs font-bold text-primary">Conselho Regional de Psicologia</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* About Image Decoration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 order-1 lg:order-2 relative"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[450px] mx-auto overflow-hidden rounded-[50px] border-8 border-white shadow-2xl">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-all hover:opacity-0 pointer-events-none"></div>
                            <img
                                src="/psicologia/hero-image.png"
                                alt="Psicologa Especialista"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Quote Badge */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-10 -right-6 lg:-right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px] hidden sm:block"
                        >
                            <Heart className="w-8 h-8 text-primary mb-3 fill-primary/10" />
                            <p className="text-sm font-bold italic leading-snug">
                                "O autoconhecimento é a ferramenta mais poderosa que temos para mudar nossa realidade."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
