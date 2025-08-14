'use client'

import Image from 'next/image'
import { Fish } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <Image
              src="/logo-igreja.png"
              alt="Igreja Bethshalom"
              width={100}
              height={33}
              className="h-8 w-auto opacity-80"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <Image
              src="/logo-ministerio.png"
              alt="Ministério de Homens"
              width={100}
              height={33}
              className="h-8 w-auto opacity-80"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-end mb-2">
              <Fish className="text-primary" size={20} />
              <p className="font-bold">Pescadores de Homens 2025</p>
            </div>
            <p className="text-sm text-white/60">
              © 2025 Igreja Bethshalom Caruaru. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}