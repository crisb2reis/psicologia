'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Como funciona a primeira sessão?",
        answer: "A primeira sessão é um momento de acolhimento e escuta. Vamos conversar sobre o que te trouxe à terapia, suas expectativas e como podemos trabalhar juntos na sua jornada emocional.",
    },
    {
        question: "Quanto tempo dura cada sessão de terapia?",
        answer: "Cada sessão tem duração de aproximadamente 50 minutos. A frequência padrão é de uma vez por semana, mas pode ser ajustada conforme a sua necessidade.",
    },
    {
        question: "O atendimento pode ser online?",
        answer: "Sim, ofereço atendimento online via plataformas seguras com sigilo absoluto. A eficácia da terapia online é comprovada e permite maior flexibilidade de horários e localização.",
    },
    {
        question: "A terapia é confidencial?",
        answer: "Absolutamente. O sigilo profissional é um dos pilares da ética na psicologia. Tudo o que for conversado em sessão é protegido por lei e pelo código de ética do psicólogo.",
    },
    {
        question: "Como posso agendar uma sessão?",
        answer: "Você pode agendar pelo formulário abaixo, escolhendo o melhor horário diretamente no calendário, ou clicar no botão do WhatsApp para falar comigo agora mesmo.",
    },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 border-b border-slate-100 last:border-none"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group transition-all"
            >
                <span className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400 group-hover:text-primary'}`}>
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-muted text-lg font-medium leading-relaxed opacity-80">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    return (
        <section id="faq" className="py-24 bg-secondary/30 rounded-[60px] mx-4 mb-24 overflow-hidden relative">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="premium-container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-1/3">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-widest text-xs"
                        >
                            Dúvidas Frequentes
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl font-bold mt-4 mb-6"
                        >
                            Respostas para suas <span className="text-primary italic">principais</span> perguntas.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted text-lg font-medium opacity-80 mb-8"
                        >
                            Se ainda tiver alguma dúvida, não hesite em me chamar no WhatsApp. Estou à disposição para te ouvir.
                        </motion.p>
                        <a href="https://wa.me/5511999999999" className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-slate-200 border border-slate-100 hover:shadow-primary/5 transition-all">
                            Falar Agora no WhatsApp
                        </a>
                    </div>

                    <div className="lg:w-2/3 bg-white p-6 sm:p-12 rounded-[40px] shadow-sm border border-slate-100">
                        {faqs.map((faq, i) => (
                            <FAQItem key={faq.question} faq={faq} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
