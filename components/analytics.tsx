"use client"

import Script from "next/script"

export function Analytics({ gaId }: { gaId: string }) {
  return (
    <>
      {/* Google Analytics - Strategy: afterInteractive is best for analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: 'Portfolio - Bahadir Bakkaloglu',
            page_location: 'https://bahadirbakkaloglu.tech/'
          });
        `}
      </Script>
    </>
  )
}
