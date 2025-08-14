import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Congresso de Homens 2025 - Pescadores de Homens | Igreja Bethshalom',
  description: 'Três dias intensos de comunhão, louvor e capacitação. Com a participação especial de Salomão do Reggae. Inscreva-se agora!',
  keywords: 'congresso de homens, igreja bethshalom, caruaru, pescadores de homens, salomão do reggae, evento cristão',
  openGraph: {
    title: 'Congresso de Homens 2025 - Pescadores de Homens',
    description: 'Venham, sigam-me, e eu os farei pescadores de homens - Mateus 4:19',
    images: ['/hero-bg.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <div className="grain" />
        <div className="vignette" />
        {children}
      </body>
    </html>
  )
}