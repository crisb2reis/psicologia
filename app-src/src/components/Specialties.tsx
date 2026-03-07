'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, User, Users, Coffee } from 'lucide-react';

const specialties = [
    {
        icon: Brain,
        title: "Ansiedade",
        desc: "A sensação constante de preocupação e medo que afeta sua rotina e sono.",
    },
    {
        icon: Zap,
        title: "Estresse & Burnout",
        desc: "Esgotamento profundo causado por pressões externas e falta de autocuidado.",
    },
    {
        icon: Heart,
        title: "Relacionamentos",
        desc: "Conflitos interpessoais, dificuldades em se expressar e manter conexões saúdaveis.",
    },
    {
        icon: User,
        title: "Autoconceito",
        desc: "Baixa autoestima, autocrítica severa e sentimentos de insegurança.",
    },
    {
        icon: Users,
        title: "Luto & Perda",
        desc: "Apoio para processar momentos difíceis e encontrar um novo sentido.",
    },
    {
        icon: Coffee,
        title: "Falta de Propósito",
        desc: "Sentir-se 'travado' ou perdido na carreira ou na vida pessoal.",
    },
];

export const Specialties = () => {
    return (
        <section id="servicos" className="py-24 bg-white relative">
            <div className="premium-container relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-xs"
                    >
                        A terapia é para todos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold mt-4 mb-4"
                    >
                        Principais Áreas de Especialidade
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted text-lg font-medium opacity-80"
                    >
                        Atendimento especializado para diferentes fases e desafios da vida humana.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-secondary/30 p-10 rounded-[40px] hover:bg-primary transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <s.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                            <p className="text-muted font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
