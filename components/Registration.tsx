'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, CheckCircle, ArrowRight } from 'lucide-react'

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
      price: 'R$ 70',
      endDate: '24/08',
      label: 'Preço promocional para irmãos',
      active: isLote1Active,
    },
    {
      number: 2,
      price: 'R$ 70,00',
      startDate: '??/??',
      endDate: '?? de 10',
      label: 'Segundo lote',
      active: !isLote1Active,
      locked: isLote1Active,
    },
    {
      number: 3,
      price: 'R$ ??,??',
      startDate: '??/??',
      endDate: '?? de ??',
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

        <div className="max-w-2xl mx-auto">
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


            <motion.a
              href="https://form.respondi.app/x44VNmey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="btn-primary w-full justify-center text-lg glow"
            >
              Fazer minha inscrição agora
              <ArrowRight />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}