'use client'

import { motion } from 'framer-motion'
import { Waves, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Waves className="absolute top-10 left-10 text-primary/10" size={200} />
        <Waves className="absolute bottom-10 right-10 text-primary/10" size={300} />
      </motion.div>

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">
            O mar está pronto. Você está?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-light">
            Não deixe para depois o que Deus está te chamando para viver agora.
            Este é o momento de responder ao chamado e se tornar um pescador de homens.
          </p>

          <div className="glass p-8 rounded-2xl mb-12 max-w-2xl mx-auto">
            <p className="text-lg mb-6">
              Junte-se a centenas de homens que estão prontos para uma experiência
              transformadora. Um encontro que marcará sua vida e mudará sua história.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3 dias</p>
                <p className="text-sm">de imersão espiritual</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+300</p>
                <p className="text-sm">homens unidos em propósito</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1 chamado</p>
                <p className="text-sm">que mudará tudo</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="https://form.respondi.app/x44VNmey"
              className="btn-primary text-xl px-12 py-6 glow"
            >
              Responder ao chamado
              <ArrowRight className="ml-2" />
            </a>
          </motion.div>

          <p className="mt-8 text-sm text-white/60">
            Vagas limitadas • Evento exclusivo para homens
          </p>
        </motion.div>
      </div>
    </section>
  )
}