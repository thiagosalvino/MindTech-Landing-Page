import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Cpu, 
  Layout, 
  Brain, 
  ShieldCheck, 
  Zap, 
  Map, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Award, 
  FileText, 
  Users,
  ArrowRight,
  Flame,
  Smartphone,
  CreditCard,
  Undo2,
  HelpCircle,
  Gift
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-center gap-8 md:gap-24 relative">
        <div className="hidden md:flex items-center gap-2">
          <img 
            src="logo.png" 
            alt="MindTech Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      
      {/* Centered Modern Notice */}
      <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 shadow-[0_0_15px_rgba(255,107,0,0.1)]">
        <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-orange animate-pulse">
          <Flame className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
        </div>
        <p className="text-[10px] md:text-sm font-bold text-white whitespace-nowrap">
          Pré-lançamento: <span className="text-brand-orange uppercase tracking-tighter">Oferta por tempo LIMITADO</span>
        </p>
      </div>
    </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">MindTech Academy</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-[1.05] text-center lg:text-left">
              Desbloqueie Sua <br />
              Mente e <span className="text-brand-orange">Domine <br />o Digital.</span>
            </h1>
            
            <p className="max-w-lg mx-auto lg:mx-0 text-base md:text-lg text-white/50 mb-10 leading-relaxed text-center lg:text-left">
              Na MindTech, criamos o caminho definitivo para quem quer dominar as ferramentas digitais e a IA, aumentando sua produtividade e autoridade no mundo moderno.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#oferta" 
                className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 orange-gradient rounded-full text-base md:text-lg font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-brand-orange/40 hover:scale-105 transition-all group"
              >
                Quero me inscrever agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image with Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
              <img 
                src="catalogo.png" 
                alt="MindTech Catálogo" 
                className="w-full h-full object-contain p-4"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40" />
            </div>

          {/* Top Right Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 orange-gradient rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-orange/40"
          >
            <Zap className="text-white w-6 h-6 md:w-8 md:h-8" />
          </motion.div>

          {/* Bottom Left Badge */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass-card p-3 md:p-5 rounded-2xl md:rounded-3xl border-white/10 flex items-center gap-3 md:gap-4 shadow-2xl"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-brand-orange/20 flex items-center justify-center">
              <ShieldCheck className="text-brand-orange w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">Metodologia</div>
              <div className="text-xs md:text-sm font-bold">100% Validada</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
              <img 
                src="thiago.png" 
                alt="Thiago Salvino" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 orange-gradient rounded-3xl -z-10 blur-2xl opacity-30" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/20 rounded-3xl -z-10 blur-2xl opacity-30" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 text-center md:text-left">
            Thiago Salvino: Seu guia para
            <span className="text-brand-orange block md:inline"> Descomplicar o Mundo Digital</span>
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed text-center md:text-left">
            <p>
              Sou <span className="text-white font-bold">Engenheiro da Computação e Empreendedor</span> com mais de <span className="text-white font-bold">8 anos de experiência</span> na área de Tecnologia da Informação. Minha jornada inclui especializações em Desenvolvimento de Software, Administração de Banco de Dados e práticas avançadas como DevOps.
            </p>
            <p>
              Minha paixão sempre foi transformar o complexo em simples. Foi com esse propósito que criei o <span className="text-brand-orange font-bold">Projeto MindTech</span>.
            </p>
            <p>
              Através do MindTech, busco levar os conhecimentos essenciais de Gestão Pessoal, Tecnologia da Informação, Prática Digital e Inteligência Artificial para todo o país. Minha missão é que você domine essas ferramentas de forma clara, objetiva e acessível.
            </p>
            <p className="text-white font-bold text-base md:text-lg pt-4 text-center">
              Prepare-se para dar um salto na sua autonomia digital!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

interface ModuleCardProps {
  key?: React.Key;
  icon: any;
  title: string;
  items: string[];
  index: number;
}

const ModuleCard = ({ icon: Icon, title, items, index }: ModuleCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-8 rounded-3xl hover:border-brand-orange/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
      <Icon className="text-brand-orange w-7 h-7" />
    </div>
    <h3 className="text-xl font-display font-bold mb-6 text-center group-hover:text-brand-orange transition-colors">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/50">
          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Modules = () => {
  const modules = [
    {
      icon: Clock,
      title: "Gestão do Tempo e Organização: Foco e Resultado",
      items: ["Dia a Dia e Organização", "Metas e Objetivos", "Foco e Disciplina", "Dicas de Detox", "Mentalidade Vencedora"]
    },
    {
      icon: Cpu,
      title: "Tecnologia da Informação: A Transformação Digital",
      items: ["Internet e a Comunicação", "Hardware e Software", "Transformação Digital", "Segurança da Informação", "O Futuro da Tecnologia", "Carreira na Área de TI"]
    },
    {
      icon: Layout,
      title: "Prática Digital: Dominando a Tecnologia Essencial",
      items: ["Nivelamento", "Sistemas Operacionais", "Internet e Download", "Office 365: Word, Excel e PowerPoint", "E-commerce e Streaming", "Redes Sociais e Jogos Digitais"]
    },
    {
      icon: Brain,
      title: "Inteligência Artificial: Aumentando a Produtividade",
      items: ["O que é Inteligência Artificial", "IA: Ferramentas Essenciais", "IA: Criatividade e Inovação", "IA Aplicada: Criação de Conteúdo", "O Futuro das IAs"]
    }
  ];

  return (
    <section id="conteudo" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Conteúdo do Curso <span className="text-brand-orange">MindTech</span></h2>
          <p className="text-white/50">Alguns dos módulos que você irá encontrar:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <ModuleCard 
              key={idx} 
              icon={mod.icon} 
              title={mod.title} 
              items={mod.items} 
              index={idx} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BonusCardProps {
  key?: React.Key;
  title: string;
  description: string;
  oldPrice: string;
  index: number;
}

const BonusCard = ({ title, description, oldPrice, index }: BonusCardProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col h-full"
  >
    <div className="flex justify-center mb-6">
      <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Gift className="text-brand-orange w-7 h-7" />
      </div>
    </div>
    <h4 className="text-lg font-display font-bold mb-4 text-center">{title}</h4>
    <p className="text-sm text-white/50 mb-8 leading-relaxed text-left">{description}</p>
    <div className="mt-auto flex items-baseline justify-center gap-2 pt-4 border-t border-white/5">
      <span className="text-xs text-white/30 line-through">R$ {oldPrice}</span>
      <span className="text-xl font-bold text-brand-orange">R$ 0,00</span>
    </div>
  </motion.div>
);

const Bonuses = () => {
  const bonuses = [
    {
      title: "Checklist Interativo: Blindagem Digital",
      description: "O passo a passo para proteger suas contas, senhas e dados das principais ameaças online. Sua tranquilidade no mundo digital.",
      oldPrice: "47,00"
    },
    {
      title: "Plano de 7 Dias de Detox Digital",
      description: "Uma missão diária e simples para você eliminar a bagunça digital, silenciar as distrações e recuperar seu foco e paz mental.",
      oldPrice: "67,00"
    },
    {
      title: "Mapa de Carreiras em Tecnologia da Informação",
      description: "Descubra as profissões mais promissoras da tecnologia, o que você precisa para começar e qual caminho seguir para um futuro de novas oportunidades.",
      oldPrice: "97,00"
    }
  ];

  return (
    <section id="bonus" className="pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            E somente para esta turma de pré-lançamento <br />
            <span className="text-gradient">VOCÊ AINDA LEVA 3 BÔNUS ESPECIAIS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, idx) => (
            <BonusCard 
              key={idx} 
              title={bonus.title} 
              description={bonus.description} 
              oldPrice={bonus.oldPrice} 
              index={idx} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="oferta" className="py-12 md:py-24">
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
    </div>
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-10 rounded-[32px] md:rounded-[40px] border-white/5"
        >
          <h3 className="text-xl md:text-2xl font-display font-bold mb-8 text-center">Itens Inclusos</h3>
          <ul className="space-y-6">
            {[
              { icon: Award, text: "Acesso completo por 1 ano a +100 Aulas Práticas" },
              { icon: MessageCircle, text: "Comunidade VIP de alunos no WhatsApp" },
              { icon: FileText, text: "Checklists e Guias em PDF" },
              { icon: Zap, text: "Questionários de fixação ao final dos módulos" },
              { icon: ShieldCheck, text: "Certificado de Conclusão MindTech" }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-brand-orange text-sm italic font-bold">E muito mais!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-brand-orange shadow-2xl shadow-brand-orange/20 flex flex-col justify-between"
        >
          <div className="text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-brand-orange text-white text-[10px] md:text-sm font-black uppercase tracking-widest mb-6 shadow-lg">
              Por tempo LIMITADO!
            </div>
            <h3 className="text-xl md:text-3xl font-display font-extrabold text-white mb-4 text-center">
              Oferta Especial
            </h3>
            <p className="text-white/90 text-sm mb-8 leading-relaxed text-left">
              O valor normal do <span className="font-bold">MindTech</span> com todo o conteúdo exclusivo será de <span className="line-through">R$ 497,00</span>, mas nesta oferta de pré-lançamento, você terá acesso a tudo isso + Bônus Especial por apenas:
            </p>
            
            <div className="mb-8 text-center">
              <span className="text-white/80 text-sm block mb-1">12x de</span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-7xl font-display font-black text-brand-orange drop-shadow-xl">R$ 20,37</span>
              </div>
              <span className="text-white/80 text-sm block mt-2 font-medium">ou R$ 197,00 à vista</span>
            </div>
          </div>

          <div className="space-y-6">
            <a 
              href="https://pay.kiwify.com.br/QnQSMnx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 md:py-5 orange-gradient text-white rounded-2xl text-base md:text-xl font-black hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center text-center"
            >
              Quero garantir minha vaga AGORA
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[10px] font-bold text-white/60 uppercase tracking-widest">
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Compra Segura</div>
              <div className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Satisfação Garantida</div>
              <div className="flex items-center gap-1.5"><Undo2 className="w-3.5 h-3.5" /> 7 dias de garantia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium group-hover:text-brand-orange transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-white/30" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/50 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter experiência para usar esse produto?",
      answer: "Não. Esse curso atende totalmente quem está fazendo seu primeiro contato com tecnologia, bem como aqueles que tem pouco conhecimento. Aqui você aprenderá tudo do absoluto zero."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso à nossa plataforma exclusiva de alunos."
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Sim! Nossa plataforma é totalmente responsiva e você pode assistir às aulas de qualquer dispositivo: celular, tablet ou computador."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos cartão de crédito (com parcelamento em até 12x), PIX e boleto bancário."
    }
  ];

  return (
    <section id="faq" className="pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-4 block">FAQ</span>
          <h2 className="text-4xl font-display font-bold">Dúvidas <span className="text-brand-orange">Frequentes</span></h2>
        </div>
        <div className="glass-card rounded-[32px] px-8 md:px-12">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-y-8 md:gap-8">
          {/* Logo 1 */}
          <div className="flex justify-center md:justify-start order-1">
            <img 
              src="logo.png" 
              alt="MindTech Logo" 
              className="h-6 w-auto opacity-70"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Logo 2 (Mobile order 2, Desktop order 3) */}
          <div className="flex justify-center md:justify-end order-2 md:order-3">
            <img 
              src="ts.png" 
              alt="TS Logo" 
              className="h-6 w-auto opacity-70"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Copyright (Mobile order 3, Desktop order 2) */}
          <div className="col-span-2 md:col-span-1 flex justify-center order-3 md:order-2">
            <p className="text-white/30 text-[10px] md:text-xs text-center">
              © Copyright 2026 MindTech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Social Proof / Stats */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Aulas Práticas", value: "+100" },
            { label: "Anos de Exp.", value: "8+" },
            { label: "Suporte VIP", value: "24/7" },
            { label: "Satisfação", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-display font-black text-brand-orange mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <About />
      <Modules />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
