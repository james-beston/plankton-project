import { Inter, Roboto_Mono } from 'next/font/google';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
