import { OptimizedImage } from "./optimized-image"

interface CertificationCardProps {
  title: string
  organization: string
  level?: string
  description: string
  badgeSrc: string
}

export function CertificationCard({ title, organization, level, description, badgeSrc }: CertificationCardProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
      <div className="flex items-center gap-4 mb-3">
        <div className="relative w-16 h-16 flex-shrink-0">
          <OptimizedImage src={badgeSrc} alt={`${title} Badge`} fill sizes="64px" className="rounded-lg" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">
            {organization} {level && `• ${level}`}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}
