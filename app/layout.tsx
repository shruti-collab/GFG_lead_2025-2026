import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GFG Campus Body GCET',
  description: 'Meet the team — GFG Campus Body GCET. Innovation • Collaboration • Growth',
  keywords: ['GFG', 'GeeksforGeeks', 'GCET', 'Campus Body', 'Technology', 'Students'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 transition-colors">
        <ThemeProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}