import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Overpass } from 'next/font/google'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${overpass.variable} ${overpass.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
