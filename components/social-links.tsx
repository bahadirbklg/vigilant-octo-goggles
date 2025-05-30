"use client"

import type React from "react"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  username: string
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bahadir-bakkaloglu-846260174",
      icon: <Linkedin size={20} />,
      username: "bahadir-bakkaloglu-846260174",
    },
    {
      name: "GitHub",
      href: "https://github.com/bahadirbakkaloglu", // Replace with actual GitHub URL
      icon: <Github size={20} />,
      username: "bahadirbakkaloglu",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/bahadirbklg", // Replace with actual Twitter URL
      icon: <Twitter size={20} />,
      username: "@bahadirbklg",
    },
    {
      name: "Email",
      href: "mailto:bahadirbklg@gmail.com", // Replace with your email
      icon: <Mail size={20} />,
      username: "bahadirbklg@gmail.com",
    },
  ]

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          aria-label={`Connect with Bahadir on ${link.name}`}
        >
          {link.icon}
          <span className="text-sm">{link.username}</span>
        </Link>
      ))}
    </div>
  )
}
