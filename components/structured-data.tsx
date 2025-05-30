import Script from "next/script"

interface PersonSchemaProps {
  name: string
  jobTitle: string
  organization: string
  url: string
  image: string
  sameAs: string[]
}

export function PersonSchema({ name, jobTitle, organization, url, image, sameAs }: PersonSchemaProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: {
      "@type": "Organization",
      name: organization,
    },
    url,
    image,
    sameAs,
  }

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

interface WebsiteSchemaProps {
  name: string
  url: string
  description: string
  author: string
}

export function WebsiteSchema({ name, url, description, author }: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}

interface ProfilePageSchemaProps {
  url: string
  name: string
  description: string
  mainEntity: {
    name: string
    jobTitle: string
    url: string
  }
}

export function ProfilePageSchema({ url, name, description, mainEntity }: ProfilePageSchemaProps) {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    name,
    description,
    mainEntity: {
      "@type": "Person",
      name: mainEntity.name,
      jobTitle: mainEntity.jobTitle,
      url: mainEntity.url,
    },
  }

  return (
    <Script
      id="profile-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
    />
  )
}
