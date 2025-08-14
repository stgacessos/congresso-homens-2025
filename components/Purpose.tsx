'use client'

import { motion } from 'framer-motion'
import { Anchor, Heart, Users, Target } from 'lucide-react'

export default function Purpose() {
  const items = [
    {
      icon: Anchor,
      title: 'Fundamento Bíblico',
      description: 'Alicerçados na Palavra de Deus para uma vida com propósito',
    },
    {
      icon: Heart,
      title: 'Transformação Genuína',
      description: 'Corações renovados pelo poder do Espírito Santo',
    },
    {
      icon: Users,
      title: 'Comunhão Verdadeira',
      description: 'Unidos como irmãos na missão de Cristo',
    },
    {
      icon: Target,
      title: 'Missão Clara',
      description: 'Capacitados para pescar homens e expandir o Reino',
    },
  ]

  return (
    <section id="proposito" className="py-24">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chamados para seguir. Enviados para pescar.
          </h2>
          <p className="text-xl text-primary-light max-w-3xl mx-auto">
            O Congresso de Homens 2025 é mais que um evento — é um chamado divino para homens
            que desejam viver com propósito, seguindo os passos de Jesus e impactando vidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-lg hover:scale-105 transition-transform"
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">O que você vai encontrar:</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Palavras poderosas que transformarão sua perspectiva de vida e ministério</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Momentos intensos de adoração e quebrantamento na presença de Deus</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Conexão genuína com homens que compartilham da mesma fé e propósito</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Ferramentas práticas para ser um pescador de homens em sua geração</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}