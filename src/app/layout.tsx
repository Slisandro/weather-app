import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'weather app',
  description: 'SPA Weather App with geolocation',
  icons: {
		shortcut: "/favicon.png",
	}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#100e1d" }}>
      <head>
	<link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className + ` ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        {children}
      </body>
    </html>
  )
}
