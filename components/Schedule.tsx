'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function Schedule() {
  const days = [
    {
      date: '03/10',
      day: 'Sexta-feira',
    },
    {
      date: '04/10',
      day: 'Sábado',
    },
    {
      date: '05/10',
      day: 'Domingo',
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

        <div className="grid md:grid-cols-3 gap-8">
          {days.map((day, index) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-lg hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-light text-sm">{day.day}</p>
                  <p className="text-2xl font-bold">{day.date}</p>
                </div>
                <Calendar className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}