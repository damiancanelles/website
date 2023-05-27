import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Damian Canelles Gomez Portafolio',
  description: 'A potafolio of a software enginner called Damian Canelles Gomez, that live on Austell, Georgia, United States and have abilities on react, next js, microservices, aws, python, django, express, etc. With 3 yeras of expertice is the best option to your company.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
