'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, X, ChevronRight } from 'lucide-react'

export default function Schedule() {
  const [showModal, setShowModal] = useState(false)

  const days = [
    {
      date: '03/10',
      day: 'Sexta-feira',
      title: 'Abertura Impactante',
      highlights: ['Credenciamento', 'Culto de abertura', 'Palavra poderosa'],
      schedule: [
        { time: '17:00', activity: 'Credenciamento e recepção' },
        { time: '19:00', activity: 'Jantar de confraternização' },
        { time: '20:00', activity: 'Culto de abertura' },
        { time: '21:00', activity: 'Ministração da Palavra' },
        { time: '22:30', activity: 'Momento de oração e consagração' },
      ],
    },
    {
      date: '04/10',
      day: 'Sábado',
      title: 'Dia de Transformação',
      highlights: ['Workshops', 'Salomão do Reggae', 'Noite especial'],
      schedule: [
        { time: '08:00', activity: 'Café da manhã' },
        { time: '09:00', activity: 'Devocional matinal' },
        { time: '10:00', activity: 'Workshop: Homem segundo o coração de Deus' },
        { time: '12:00', activity: 'Almoço' },
        { time: '14:00', activity: 'Workshop: Liderança no lar' },
        { time: '16:00', activity: 'Tempo livre / Esportes' },
        { time: '19:00', activity: 'Jantar' },
        { time: '20:00', activity: 'Culto com Salomão do Reggae' },
        { time: '22:00', activity: 'Ministração especial' },
      ],
    },
    {
      date: '05/10',
      day: 'Domingo',
      title: 'Envio e Comissionamento',
      highlights: ['Santa Ceia', 'Comissionamento', 'Encerramento'],
      schedule: [
        { time: '08:00', activity: 'Café da manhã' },
        { time: '09:00', activity: 'Escola Bíblica Especial' },
        { time: '10:30', activity: 'Culto de encerramento' },
        { time: '11:30', activity: 'Santa Ceia' },
        { time: '12:00', activity: 'Oração de envio e comissionamento' },
        { time: '13:00', activity: 'Almoço de despedida' },
      ],
    },
  ]

  return (
    <section id="programacao" className="py-24">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Três dias que mudarão sua vida
          </h2>
          <p className="text-xl text-primary-light">
            Uma jornada espiritual intensa e transformadora
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {days.map((day, index) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-primary-light text-sm">{day.day}</p>
                  <p className="text-2xl font-bold">{day.date}</p>
                </div>
                <Calendar className="text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{day.title}</h3>
              
              <ul className="space-y-2 mb-4">
                {day.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <ChevronRight size={16} className="text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 text-primary text-sm">
                <Clock size={16} />
                <span>Ver horários completos</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            Ver programação completa
          </button>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-primary-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-3xl font-bold">Programação Completa</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  {days.map((day) => (
                    <div key={day.date} className="glass p-6 rounded-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div>
                          <p className="text-primary-light text-sm">{day.day}</p>
                          <p className="text-2xl font-bold">{day.date}</p>
                        </div>
                        <h4 className="text-xl font-bold">{day.title}</h4>
                      </div>

                      <div className="space-y-3">
                        {day.schedule.map((item, i) => (
                          <div key={i} className="flex gap-4 items-start">
                            <span className="text-primary font-mono text-sm mt-1">{item.time}</span>
                            <span className="flex-1">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}