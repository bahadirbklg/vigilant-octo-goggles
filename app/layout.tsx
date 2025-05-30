import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PersonSchema, WebsiteSchema } from "@/components/structured-data"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

// Base URL for canonical links and metadata
const baseUrl = process.env.NODE_ENV === "production" ? "https://bahadirbakkaloglu.tech" : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bahadir Bakkaloglu | Site Reliability Engineer",
    template: "%s | Bahadir Bakkaloglu",
  },
  description:
    "Site Reliability Engineer specializing in cloud infrastructure, automation, and high-availability systems with expertise in AWS, Kubernetes, and DevOps practices.",
  keywords: "Site Reliability Engineer, SRE, Cloud Infrastructure, Automation, DevOps, Kubernetes, AWS, Monitoring",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Bahadir Bakkaloglu | Site Reliability Engineer",
    description:
      "Site Reliability Engineer specializing in cloud infrastructure, automation, and high-availability systems.",
    siteName: "Bahadir Bakkaloglu Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Bahadir Bakkaloglu - Site Reliability Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahadir Bakkaloglu | Site Reliability Engineer",
    description:
      "Site Reliability Engineer specializing in cloud infrastructure, automation, and high-availability systems.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@bahadirbklg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Suspense>{children}</Suspense>

        {/* Structured Data */}
        <PersonSchema
          name="Bahadir Bakkaloglu"
          jobTitle="Site Reliability Engineer"
          organization="Turk Telekom"
          url="https://bahadirbakkaloglu.tech"
          image="https://bahadirbakkaloglu.tech/profile.jpeg"
          sameAs={["https://www.linkedin.com/in/bahadir-bakkaloglu-846260174", "https://github.com/bahadirbakkaloglu"]}
        />

        <WebsiteSchema
          name="Bahadir Bakkaloglu | SRE Portfolio"
          url="https://bahadirbakkaloglu.tech"
          description="Professional portfolio of Bahadir Bakkaloglu, Site Reliability Engineer specializing in cloud infrastructure and automation."
          author="Bahadir Bakkaloglu"
        />

        {/* Analytics with environment variable */}
        {process.env.NEXT_PUBLIC_GA_ID && <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  )
}
