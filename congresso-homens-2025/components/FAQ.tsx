'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Há inscrições no local?',
      answer: 'As inscrições estão voando e é possível que no dia não haja vagas. Se houver, o valor seguirá o lote vigente, possivelmente mais alto. Recomendamos fortemente que garanta sua vaga antecipadamente.',
    },
    {
      question: 'Quem pode participar?',
      answer: 'Homens em geral, a partir de 14 anos, membros ou não da igreja. O evento foi pensado para todos os homens que desejam crescer espiritualmente e serem impactados pela Palavra de Deus.',
    },
    {
      question: 'A camiseta está incluída?',
      answer: 'Não, a camiseta custa R$ 30 por participante, mediante disponibilidade. Você pode adicionar a camiseta no momento da inscrição ou adquirir no credenciamento.',
    },
    {
      question: 'Terá área kids?',
      answer: 'Sim, teremos uma área kids com acompanhamento básico para que os pais possam participar tranquilamente das programações. O espaço conta com monitores treinados e atividades apropriadas.',
    },
    {
      question: 'Tem descontos para grandes grupos?',
      answer: 'Não, o evento em si não se paga e não tem a intenção de gerar lucro. Caso haja lucro, será redirecionado para projetos missionários. Por isso o evento não tem descontos progressivos, já que se trata de doação de irmãos que estão fazendo o evento acontecer.',
    },
    {
      question: 'Posso transferir minha inscrição?',
      answer: 'Sim, você pode transferir sua inscrição para outra pessoa até 48h antes do evento. Entre em contato com nossa equipe para realizar a transferência e atualizar os dados do participante.',
    },
    {
      question: 'E se chover?',
      answer: 'Nossa estrutura está preparada para qualquer clima. O evento acontecerá rain or shine! Temos espaços cobertos e toda a infraestrutura necessária para garantir o conforto dos participantes.',
    },
    {
      question: 'Preciso levar comprovante?',
      answer: 'Sim, traga um documento com foto e o QR Code da inscrição (enviado por e-mail). Isso agiliza o processo de credenciamento e garante sua entrada no evento.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-primary-light">
            Tire suas dúvidas sobre o congresso
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-primary" size={20} />
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/80 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center glass p-8 rounded-lg max-w-2xl mx-auto"
        >
          <p className="text-lg mb-4">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5581992450999"
              className="text-primary hover:underline"
            >
              (81) 99245-0999 (Vagner)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}