import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Bahadir Bakkaloglu | Site Reliability Engineer",
  description:
    "Experienced SRE specializing in cloud infrastructure, automation, and high-availability systems. AWS certified with expertise in Kubernetes, monitoring, and DevOps practices.",
  keywords: "Site Reliability Engineer, SRE, AWS, Kubernetes, DevOps, Cloud Infrastructure, Automation, Monitoring",
  authors: [{ name: "Bahadir Bakkaloglu" }],
  creator: "Bahadir Bakkaloglu",
  openGraph: {
    title: "Bahadir Bakkaloglu | Site Reliability Engineer",
    description: "Experienced SRE specializing in cloud infrastructure, automation, and high-availability systems.",
    url: "https://bahadirbakkaloglu.tech",
    siteName: "Bahadir Bakkaloglu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bahadir Bakkaloglu - Site Reliability Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahadir Bakkaloglu | Site Reliability Engineer",
    description: "Experienced SRE specializing in cloud infrastructure, automation, and high-availability systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bahadirbakkaloglu.tech" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
