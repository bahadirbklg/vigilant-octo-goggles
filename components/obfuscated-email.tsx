"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"

interface ObfuscatedEmailProps {
  user: string
  domain: string
  className?: string
  showIcon?: boolean
}

export function ObfuscatedEmail({ user, domain, className = "", showIcon = true }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("")
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    // Simple obfuscation - decode on client side
    const decodedEmail = `${user}@${domain}`
    setEmail(decodedEmail)
  }, [user, domain])

  const handleClick = () => {
    setIsRevealed(true)
    if (email) {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline ${className}`}
      aria-label="Send email"
    >
      {showIcon && <Mail size={16} />}
      {isRevealed ? email : `${user}@${domain}`}
    </button>
  )
}
