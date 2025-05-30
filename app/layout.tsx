import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Bahadir Bakkaloglu | SRE",
  description: "Site Reliability Engineer at Turk Telekom",
    generator: 'v0.dev'
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
