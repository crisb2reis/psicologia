'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, User, Users, Coffee } from 'lucide-react';

const problems = [
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

export const Problems = () => {
    return (
        <section className="py-24 bg-secondary/50 rounded-[40px] px-4 mx-4">
            <div className="premium-container">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-xs"
                    >
                        Você não precisa passar por isso sozinho
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold mt-4 mb-4"
                    >
                        Você se identifica com algum destes desafios?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted text-lg font-medium opacity-80"
                    >
                        A terapia é um convite para entender o que está acontecendo por trás desses sentimentos e cultivar novas formas de viver.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all text-center lg:text-left"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                                <p.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                            <p className="text-muted leading-relaxed font-medium">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="#contato" className="text-primary font-bold inline-flex items-center hover:underline">
                        Tudo bem não estar bem. Vamos conversar?
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);
