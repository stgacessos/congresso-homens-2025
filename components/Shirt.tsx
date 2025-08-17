'use client'

import { motion } from 'framer-motion'
import { Shirt } from 'lucide-react'
import Image from 'next/image'

export default function ShirtSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Camiseta oficial do evento
          </h2>
          <p className="text-xl text-primary-light">
            Vista-se para fazer a diferença
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Shirt className="text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-2 text-xl">Camiseta exclusiva</h4>
                  <p className="text-white/80 mb-4">
                    Adicione a camiseta oficial do congresso por apenas <span className="text-primary font-bold">R$ 20</span>
                  </p>
                  <p className="text-sm text-white/60">
                    * Mediante disponibilidade de tamanhos
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg bg-primary/10">
              <h4 className="font-bold mb-3">Características:</h4>
              <ul className="space-y-2 text-white/80">
                <li>• 100% algodão premium</li>
                <li>• Estampa exclusiva do evento</li>
                <li>• Confortável e durável</li>
                <li>• Tamanhos: P ao GG</li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm text-white/60">
                A camiseta pode ser adicionada durante o processo de inscrição
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/camisas.jpg"
                alt="Camiseta oficial - Frente e costas"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement?.classList.add('bg-primary/20', 'flex', 'items-center', 'justify-center')
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = '<div class="text-center"><svg class="w-24 h-24 mx-auto mb-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h6v2H9V5z"></path></svg><p class="text-lg">Camiseta do evento</p></div>'
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}