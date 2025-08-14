'use client'

import { motion } from 'framer-motion'
import { MapPin, Car, Bus, Clock } from 'lucide-react'

export default function Location() {
  return (
    <section id="local" className="py-24">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como chegar
          </h2>
          <p className="text-xl text-primary-light">
            Estamos te esperando em Caruaru
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Igreja Bethshalom Caruaru</h3>
                  <p className="text-white/80 mb-4">
                    Rua Principal, 123 - Centro<br />
                    Caruaru - PE, 55000-000
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Como chegar:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">De carro</p>
                    <p className="text-sm text-white/80">
                      Estacionamento gratuito disponível no local
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Transporte público</p>
                    <p className="text-sm text-white/80">
                      Linhas 101, 203 e 305 param próximo à igreja
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Horário de funcionamento</p>
                    <p className="text-sm text-white/80">
                      Credenciamento a partir das 17h na sexta-feira
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg bg-primary/10">
              <h4 className="font-bold mb-2">Hospedagem</h4>
              <p className="text-sm text-white/80">
                Temos parcerias com hotéis próximos. Entre em contato para mais informações
                sobre descontos especiais para participantes do congresso.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <MapPin size={64} className="text-primary/50" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4!2d-35.97!3d-8.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTYnNDguMCJTIDM1wrA1OCcxMi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}