import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'weather app',
  description: 'SPA Weather App with geolocation'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#100e1d" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className + ` ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        {children}
      </body>
    </html>
  )
}
