'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Clock, User, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';

export const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <section id="contato" className="py-24 bg-white">
                <div className="premium-container max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-secondary/50 p-12 rounded-[50px] shadow-sm border border-slate-100 text-center"
                    >
                        <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#25D366]/5">
                            <CheckCircle className="w-10 h-10 text-[#25D366]" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 italic">Obrigado pelo seu interesse!</h2>
                        <p className="text-muted text-lg font-medium leading-relaxed mb-8 opacity-80">
                            Recebi seu interesse em agendar uma sessão. Entrarei em contato pelo WhatsApp em até 24 horas para confirmar o melhor horário.
                        </p>
                        <a
                            href="/"
                            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all inline-flex items-center gap-2"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Voltar ao Início
                        </a>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contato" className="py-24 bg-white">
            <div className="premium-container">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-stretch">

                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-widest text-xs"
                        >
                            Agende sua Jornada
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight"
                        >
                            Vamos agendar sua <span className="text-primary italic">primeira</span> sessão?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted text-lg font-medium opacity-80 mb-12 leading-relaxed"
                        >
                            Preencha os campos abaixo e entrarei em contato para darmos o primeiro passo na sua caminhada de autoconhecimento.
                        </motion.p>

                        <ul className="space-y-6">
                            {[
                                { title: "Atendimento Presencial", sub: "Disponível em São Paulo/SP" },
                                { title: "Atendimento Online", sub: "Para todo o mundo via Zoom/Skype" },
                                { title: "Horários Flexíveis", sub: "Tarde e Noite conforme agenda" }
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-center gap-4 bg-secondary/30 p-6 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all"
                                >
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                        <span className="text-primary font-bold text-lg">{idx + 1}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg">{item.title}</span>
                                        <span className="text-xs font-bold text-muted uppercase tracking-widest leading-none mt-1 opacity-60">{item.sub}</span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-white p-8 sm:p-12 rounded-[50px] shadow-2xl shadow-primary/5 border border-slate-100 relative group"
                    >
                        {/* Background blur effect */}
                        <div className="absolute inset-0 bg-primary/2 blur-[80px] -z-10 opacity-50 group-hover:opacity-100 transition-all"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-muted block mb-3 px-2">Seu Nome Completo</label>
                                    <div className="relative">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                        <input
                                            required
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary ring-inset transition-all font-medium text-foreground outline-none placeholder:text-slate-400"
                                            placeholder="Ex: João da Silva"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-muted block mb-3 px-2">Seu WhatsApp</label>
                                    <div className="relative">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                        <input
                                            required
                                            placeholder="Ex: (11) 99999-9999"
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary ring-inset transition-all font-medium text-foreground outline-none placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-muted block mb-3 px-2">Seu E-mail (Opcional)</label>
                                    <div className="relative">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                        <input
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary ring-inset transition-all font-medium text-foreground outline-none placeholder:text-slate-400"
                                            placeholder="Ex: joao@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-muted block mb-3 px-2">Melhor Turno</label>
                                        <div className="relative">
                                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <select className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary ring-inset transition-all font-medium text-foreground outline-none appearance-none cursor-pointer">
                                                <option>Manhã</option>
                                                <option>Tarde</option>
                                                <option>Noite</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-muted block mb-3 px-2">Tipo de Atendimento</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <select className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary ring-inset transition-all font-medium text-foreground outline-none appearance-none cursor-pointer">
                                                <option>Online (Vídeo)</option>
                                                <option>Presencial</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary text-white py-5 rounded-3xl text-lg font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mt-10 hover:opacity-90 transition-all"
                            >
                                Solicitar Meu Agendamento
                                <Send className="w-5 h-5" />
                            </motion.button>

                            <p className="text-[10px] font-bold uppercase tracking-widest text-center text-muted/60 px-4 leading-relaxed">
                                Ao clicar em enviar, você concorda com nossa política de privacidade e o sigilo de seus dados.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
