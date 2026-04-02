import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: 'Md. Sadek Hossain (Nirob) | Full Stack Laravel Developer',
  description: 'Full-stack web developer with 4+ years of experience specializing in Laravel, PHP, and modern JavaScript frameworks. Building scalable, secure, high-performance web applications.',
  keywords: ['Laravel Developer', 'PHP Developer', 'Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'MySQL'],
  authors: [{ name: 'Md. Sadek Hossain (Nirob)' }],
  creator: 'Md. Sadek Hossain (Nirob)',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Md. Sadek Hossain (Nirob) | Full Stack Laravel Developer',
    description: 'Full-stack web developer with 4+ years of experience specializing in Laravel, PHP, and modern JavaScript frameworks.',
    siteName: 'Nirob Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Sadek Hossain (Nirob) | Full Stack Laravel Developer',
    description: 'Full-stack web developer with 4+ years of experience specializing in Laravel, PHP, and modern JavaScript frameworks.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
