import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Content Generator',
  description: 'Create cool text and images with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='container mx-auto py-10'>
          {children}
        </main>
      </body>
    </html>
  )
}
