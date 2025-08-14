'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, CheckCircle, Shirt, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Registration() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [isLote1Active, setIsLote1Active] = useState(true)

  useEffect(() => {
    const now = new Date()
    setCurrentDate(now)
    setIsLote1Active(now < new Date('2025-08-25'))
  }, [])

  const lotes = [
    {
      number: 1,
      price: 'R$ 60',
      endDate: '24/08',
      label: 'Preço promocional para irmãos',
      active: isLote1Active,
    },
    {
      number: 2,
      price: '{{PRECO_LOTE_2}}',
      startDate: '{{DATA_INICIO_LOTE_2}}',
      endDate: '{{DATA_FIM_LOTE_2}}',
      label: 'Segundo lote',
      active: !isLote1Active,
      locked: isLote1Active,
    },
    {
      number: 3,
      price: '{{PRECO_LOTE_3}}',
      startDate: '{{DATA_INICIO_LOTE_3}}',
      endDate: '{{DATA_FIM_LOTE_3}}',
      label: 'Último lote',
      active: false,
      locked: true,
    },
  ]

  return (
    <section id="inscricao" className="py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Garanta sua vaga agora
          </h2>
          <p className="text-xl text-primary-light">
            Vagas limitadas — Não perca esta oportunidade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {lotes.map((lote, index) => (
              <motion.div
                key={lote.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${lote.locked ? 'opacity-50' : ''}`}
              >
                <div className={`glass p-6 rounded-lg ${lote.active ? 'border-2 border-primary glow' : ''}`}>
                  {lote.locked && (
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-8 h-8 mb-2 mx-auto" />
                        <p className="text-sm">Revela dia {lote.startDate || '25/08'}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">Lote {lote.number}</h3>
                        {lote.active && (
                          <span className="px-2 py-1 bg-primary text-xs font-bold rounded animate-pulse">
                            ATIVO
                          </span>
                        )}
                      </div>
                      <p className="text-3xl font-bold text-primary mb-1">{lote.price}</p>
                      <p className="text-sm text-white/80">{lote.label}</p>
                      {lote.endDate && (
                        <p className="text-xs text-primary-light mt-1">
                          {lote.active ? 'Até' : 'Encerrado em'} {lote.endDate}
                        </p>
                      )}
                    </div>
                    
                    {lote.active && (
                      <CheckCircle className="text-primary" size={32} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg bg-primary/10"
            >
              <div className="flex items-start gap-4">
                <Shirt className="text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Camiseta do evento</h4>
                  <p className="text-sm text-white/80">
                    Adicione por apenas R$ 20 (mediante disponibilidade)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="{{CTA_URL}}"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="btn-primary w-full justify-center text-lg glow"
            >
              Fazer minha inscrição agora
              <ArrowRight />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/camiseta-front.png"
                  alt="Camiseta - Frente"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement?.classList.add('bg-primary/20', 'flex', 'items-center', 'justify-center')
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<div class="text-center"><Shirt class="w-16 h-16 mx-auto mb-2" /><p class="text-sm">Frente</p></div>'
                    }
                  }}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/camiseta-back.png"
                  alt="Camiseta - Costas"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement?.classList.add('bg-primary/20', 'flex', 'items-center', 'justify-center')
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<div class="text-center"><Shirt class="w-16 h-16 mx-auto mb-2" /><p class="text-sm">Costas</p></div>'
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="mt-6 glass p-4 rounded-lg text-center">
              <p className="text-sm mb-2">Camiseta oficial do evento</p>
              <p className="font-bold">100% algodão • Estampa exclusiva</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}