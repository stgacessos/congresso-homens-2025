import { AlertCircle } from 'lucide-react'

export default function Urgency() {
  return (
    <section className="relative py-12 bg-primary/10">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <AlertCircle size={32} className="text-primary-light animate-pulse" />
          
          <div>
            <h3 className="text-2xl font-bold mb-2">
              2º Lote por R$ 70 até 27/09. Depois o valor sobe.
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="inline-block px-4 py-1 bg-primary/20 rounded-full text-sm font-semibold">
                Preço promocional para irmãos
              </span>
              <p className="text-primary-light">
                As inscrições estão voando — garanta agora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}