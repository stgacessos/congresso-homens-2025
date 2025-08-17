'use client'

import { motion } from 'framer-motion'
import { Music, Star } from 'lucide-react'
import Image from 'next/image'

export default function Guest() {
  return (
    <section id="convidado" className="py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Convidado Especial
          </h2>
          <p className="text-xl text-primary-light">
            Uma noite inesquecível de adoração
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass p-8 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 opacity-50" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                <Image
                  src="/salomao.jpg"
                  alt="Salomão do Reggae"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement?.classList.add('bg-primary/20', 'flex', 'items-center', 'justify-center')
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<div class="text-6xl">🎤</div>'
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-primary-light mb-2">
                    <Music size={20} />
                    <span className="text-sm font-semibold">Ministério de Louvor</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Salomão do Reggae</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Star className="text-primary" />
                  <h3 className="text-2xl font-bold">Presença confirmada!</h3>
                </div>
                
                <p className="text-lg">
                  Prepare-se para uma experiência única de adoração com um dos maiores 
                  nomes da música gospel reggae do Brasil.
                </p>


                <div className="pt-4">
                  <p className="text-sm text-primary-light">
                    "Uma noite de quebrantamento e entrega total ao Senhor através 
                    do louvor que toca o coração e transforma vidas."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}