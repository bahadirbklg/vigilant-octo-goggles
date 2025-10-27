import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

const baseUrl = "https://bahadirbakkaloglu.tech"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bahadir Bakkaloglu | Site Reliability Engineer | SRE | DevOps Engineer",
    template: "%s | Bahadir Bakkaloglu",
  },
  description:
    "Site Reliability Engineer with 2+ years experience in AWS, Kubernetes, Docker, Linux, and DevOps. AWS Certified SysOps Administrator and Red Hat Certified System Administrator (RHCSA). Expert in cloud infrastructure, automation, CI/CD, monitoring, and high-availability systems at Turk Telekom.",
  keywords: [
    // Primary Keywords
    "Site Reliability Engineer",
    "SRE",
    "DevOps Engineer",
    "Cloud Engineer",
    "System Administrator",
    "Bahadir Bakkaloglu",

    // Cloud Platforms
    "AWS",
    "Amazon Web Services",
    "Google Cloud Platform",
    "GCP",
    "Cloud Infrastructure",
    "Cloud Architecture",
    "Multi-Cloud",

    // Container & Orchestration
    "Kubernetes",
    "Docker",
    "Container Orchestration",
    "Microservices",
    "Helm",
    "Pod Management",

    // Infrastructure as Code
    "Terraform",
    "Ansible",
    "Infrastructure as Code",
    "IaC",
    "Configuration Management",
    "CloudFormation",

    // CI/CD & DevOps
    "Jenkins",
    "GitLab CI",
    "GitHub Actions",
    "CI/CD",
    "Continuous Integration",
    "Continuous Deployment",
    "DevOps",
    "GitOps",

    // Monitoring & Observability
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "Elasticsearch",
    "Kibana",
    "Logstash",
    "Monitoring",
    "Observability",
    "APM",

    // Operating Systems
    "Linux",
    "Red Hat",
    "RHEL",
    "Ubuntu",
    "Linux Administration",

    // Programming & Scripting
    "Python",
    "Bash",
    "Shell Scripting",
    "Automation",
    "Golang",

    // Certifications
    "AWS Certified",
    "AWS SysOps Administrator",
    "RHCSA",
    "Red Hat Certified",
    "CCNA",

    // Location & Company
    "Istanbul",
    "Turkey",
    "Turk Telekom",

    // Methodologies
    "Agile",
    "Scrum",
    "Incident Management",
    "High Availability",
    "Disaster Recovery",
  ],
  authors: [
    {
      name: "Bahadir Bakkaloglu",
      url: baseUrl,
    },
  ],
  creator: "Bahadir Bakkaloglu",
  publisher: "Bahadir Bakkaloglu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: baseUrl,
    siteName: "Bahadir Bakkaloglu - Site Reliability Engineer Portfolio",
    title: "Bahadir Bakkaloglu | Site Reliability Engineer | AWS Certified | RHCSA",
    description:
      "Professional Site Reliability Engineer specializing in cloud infrastructure, Kubernetes, Docker, and DevOps automation. AWS Certified SysOps Administrator with expertise in monitoring, CI/CD, and high-availability systems.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Bahadir Bakkaloglu - Site Reliability Engineer",
        type: "image/png",
      },
      {
        url: `${baseUrl}/aws-sysops-badge.png`,
        width: 600,
        height: 600,
        alt: "AWS Certified SysOps Administrator Badge",
      },
      {
        url: `${baseUrl}/rhcsa-badge.png`,
        width: 600,
        height: 600,
        alt: "Red Hat Certified System Administrator Badge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bahadirbklg",
    creator: "@bahadirbklg",
    title: "Bahadir Bakkaloglu | Site Reliability Engineer | AWS Certified",
    description:
      "Site Reliability Engineer with expertise in AWS, Kubernetes, Docker, Linux, and DevOps automation. AWS Certified SysOps Administrator and RHCSA certified.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
      "en-US": baseUrl,
      tr: baseUrl,
    },
  },
  category: "technology",
  classification: "Site Reliability Engineering, DevOps, Cloud Computing",
  other: {
    "google-site-verification": "your-google-verification-code", // Replace with actual code
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to External Domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.credly.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO Tags */}
        <meta name="author" content="Bahadir Bakkaloglu" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={inter.className}>
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white"
        >
          Skip to main content
        </a>

        <main id="main-content">{children}</main>

        {/* Structured Data - Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${baseUrl}/#person`,
              name: "Bahadir Bakkaloglu",
              alternateName: "Bahadır Bakkaloğlu",
              url: baseUrl,
              image: {
                "@type": "ImageObject",
                url: `${baseUrl}/profile.jpeg`,
                width: 400,
                height: 400,
              },
              jobTitle: "Site Reliability Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Turk Telekom",
                url: "https://www.turktelekom.com.tr",
              },
              email: "bahadirbklg@gmail.com",
              telephone: "+905359483985",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Istanbul",
                addressCountry: "TR",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "İstinye Üniversitesi",
                url: "https://www.istinye.edu.tr",
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "AWS Certified SysOps Administrator – Associate",
                  credentialCategory: "Professional Certification",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Amazon Web Services",
                  },
                  dateCreated: "2025-01",
                  expires: "2028-01",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Red Hat Certified System Administrator (RHCSA)",
                  credentialCategory: "Professional Certification",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Red Hat",
                  },
                  dateCreated: "2025-05",
                },
              ],
              knowsAbout: [
                "Site Reliability Engineering",
                "Cloud Computing",
                "Amazon Web Services",
                "Kubernetes",
                "Docker",
                "DevOps",
                "Linux Administration",
                "Infrastructure as Code",
                "CI/CD",
                "Monitoring",
                "Automation",
              ],
              sameAs: [
                "https://www.linkedin.com/in/bahadir-bakkaloglu-846260174",
                "https://github.com/bahadirbakkaloglu",
                "https://twitter.com/bahadirbklg",
              ],
            }),
          }}
        />

        {/* Structured Data - Professional Service Schema */}
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": `${baseUrl}/#service`,
              name: "Site Reliability Engineering Services",
              description:
                "Professional Site Reliability Engineering, DevOps, and Cloud Infrastructure services with expertise in AWS, Kubernetes, and automation.",
              provider: {
                "@type": "Person",
                name: "Bahadir Bakkaloglu",
              },
              areaServed: {
                "@type": "Country",
                name: "Turkey",
              },
              serviceType: [
                "Site Reliability Engineering",
                "DevOps Consulting",
                "Cloud Infrastructure Design",
                "Kubernetes Management",
                "CI/CD Implementation",
                "Infrastructure Automation",
                "Monitoring Solutions",
              ],
            }),
          }}
        />

        {/* Structured Data - Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${baseUrl}/#website`,
              url: baseUrl,
              name: "Bahadir Bakkaloglu - Site Reliability Engineer Portfolio",
              description:
                "Professional portfolio of Bahadir Bakkaloglu, Site Reliability Engineer specializing in cloud infrastructure, Kubernetes, and DevOps automation.",
              inLanguage: "en-US",
              author: {
                "@type": "Person",
                "@id": `${baseUrl}/#person`,
              },
              publisher: {
                "@type": "Person",
                "@id": `${baseUrl}/#person`,
              },
              copyrightYear: new Date().getFullYear(),
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${baseUrl}/?s={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: `${baseUrl}/#about`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Experience",
                  item: `${baseUrl}/#experience`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Certifications",
                  item: `${baseUrl}/#certifications`,
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Skills",
                  item: `${baseUrl}/#skills`,
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Contact",
                  item: `${baseUrl}/#contact`,
                },
              ],
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
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity (Optional - Uncomment and add your ID) */}
        {/* <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script> */}
      </body>
    </html>
  )
}
