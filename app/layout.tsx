import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Italic.woff2',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Light.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: 'James Mokua',
  description: 'Personal portfolio website of James Mokua a software engineer based in Nairobi, Kenya.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
