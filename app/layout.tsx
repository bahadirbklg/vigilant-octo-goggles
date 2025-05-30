import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

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
        {children}

        {/* Structured Data */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bahadir Bakkaloglu",
              jobTitle: "Site Reliability Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Turk Telekom",
              },
              url: "https://bahadirbakkaloglu.tech",
              image: "https://bahadirbakkaloglu.tech/profile.jpeg",
              sameAs: ["https://www.linkedin.com/in/bahadir-bakkaloglu-846260174"],
            }),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bahadir Bakkaloglu | SRE Portfolio",
              url: "https://bahadirbakkaloglu.tech",
              description:
                "Professional portfolio of Bahadir Bakkaloglu, Site Reliability Engineer specializing in cloud infrastructure and automation.",
              author: {
                "@type": "Person",
                name: "Bahadir Bakkaloglu",
              },
            }),
          }}
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
