import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './action/getCurrentUser'
import SignInModal from './components/modal/SignInModal'
import RegisterModal from './components/modal/RegisterModal'
import RentModal from './components/modal/RentModal'
import SearchModal from './components/modal/SearchModal'
import Loader from "./components/LoaderState";
import ReduxProvider from '@/app/store/provider'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ngodingbentar',
  description: 'Vacation Rentals, Homes, and More',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>
          <ClientOnly>
            <ToasterProvider />
            <RentModal />
            <SignInModal />
            <RegisterModal />
            <Navbar currentUser={currentUser} />
            <SearchModal />
            <Loader />
          </ClientOnly>
          <div className='pb-20 pt-28'>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
