import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modal/Modal'
import RegisterModal from './components/modal/RegisterModal'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ngodingbentar',
  description: 'Vacation Rentals, Homes, and More',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientOnly>
          <RegisterModal />
          {/* <Modal isOpen={true} title='hah apa' actionLabel='my-btn' /> */}
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
