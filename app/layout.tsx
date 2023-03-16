import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap'
});

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'swap'
});

export const metadata = {
  title: 'The Plankton Project',
  description: 'A CIC dedicated to researching the diversity of near-shore plankton and sharing that knowledge with others.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} bg-teal-800 h-screen w-screen text-slate-50`}>
      <body>{children}</body>
    </html>
  )
}
