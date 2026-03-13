/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Laptop, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  MessageCircle,
  Wrench,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = "51994968686"; // Exemplo de número de Porto Alegre
const WHATSAPP_LINK = `https://wa.me/${5551994968686}?text=Olá! Gostaria de um orçamento com a TEC T.I.`;

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 hover:bg-white/10 transition-all"
  >
    <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-4">
      <Icon className="text-lime-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-slate-300">
    <CheckCircle2 className="text-lime-500 w-5 h-5 flex-shrink-0" />
    <span className="font-medium">{text}</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-lime-500/30 selection:text-lime-950 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#sobre" className="hover:text-lime-400 transition-colors">Sobre Nós</a>
            <a href="#depoimentos" className="hover:text-lime-400 transition-colors">Depoimentos</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar avaliação em 48h
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 text-lime-400 text-sm font-semibold mb-6 border border-lime-500/20">
                <MapPin className="w-4 h-4" />
                Atendimento em Porto Alegre
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Seja bem vindo
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
                Especializada em todas as marcas e modelos, com garantia, peças originais e agilidade que você precisa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-lime-500 text-slate-950 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-lime-400 transition-all shadow-xl shadow-lime-900/20 hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicitar avaliação em 48h
                </a>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/${i + 10}/100/100`}
                        alt="Cliente"
                        className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">+2.500</p>
                    <p className="text-slate-500">Clientes em POA</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ServiceItem text="Avaliação em até 48h" />
                <ServiceItem text="Garantia de 180 dias" />
                <ServiceItem text="Peças Originais" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300">
                <img 
                  src="https://i.ibb.co/4gmnnZtj/Captura-de-tela-2026-02-24-111246.png" 
                  alt="Técnico reparando notebook" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-slate-900 p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4"
              >
                <div className="bg-amber-500/10 p-3 rounded-xl">
                  <Zap className="text-amber-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Diagnóstico Rápido</p>
                  <p className="text-white font-bold">Diagnóstico em até 48h</p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-1">18+</p>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-lime-500 mb-1">10k+</p>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Reparos Realizados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">4.9</p>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Avaliação Google</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-lime-500 mb-1">100%</p>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lime-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/20 backdrop-blur-lg rounded-[40px] p-8 md:p-16 border border-white/20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6">Não perca tempo com seu equipamento parado</h2>
            <p className="text-xl text-slate-900 mb-10 max-w-2xl mx-auto">
              Estamos localizados no coração de Porto Alegre. Clique no botão abaixo e receba uma estimativa de preço agora mesmo via WhatsApp.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-slate-950 text-lime-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar avaliação em 48h
              </a>
              <div className="flex items-center gap-3 text-slate-950">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(51)99496.8686</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <p className="text-slate-500 max-w-sm mb-6">
                Sua melhor escolha em Porto Alegre. Qualidade, preço justo e transparência em cada serviço.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-500 cursor-pointer transition-colors">
                  <span className="font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-500 cursor-pointer transition-colors">
                  <span className="font-bold">in</span>
                </div>
                <a 
                  href="https://www.instagram.com/tecti.informatica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-500 cursor-pointer transition-colors"
                >
                  <span className="font-bold">ig</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-lime-500 transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-lime-500 transition-colors">Sobre Nós</a></li>
                <li><a href={WHATSAPP_LINK} className="hover:text-lime-500 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Onde Estamos</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-lime-500 flex-shrink-0" />
                  <span>Rua Santana, 244 - Santana - Porto Alegre - RS - CEP: 90.040-144</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-lime-500 flex-shrink-0" />
                  <span>Seg - Sex: 09h às 18h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
            <p>© 2024 TEC T.I Porto Alegre. Todos os direitos reservados. | CNPJ: 62.141.042/0001-08</p>
            <div className="flex gap-6">
              <a href="https://sites.google.com/view/rauletefausto/in%C3%ADcio" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Privacidade</a>
              <a href="#" className="hover:text-slate-400">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
