import { OptimizedImage } from "./optimized-image"

export function ProfileHeader() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <OptimizedImage
          src="/profile.jpeg"
          alt="Bahadir Bakkaloglu - Site Reliability Engineer"
          fill
          priority
          sizes="96px"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Bahadir Bakkaloglu</h1>
        <p className="text-gray-600">Site Reliability Engineer @ Turk Telekom</p>
        <p className="text-sm text-gray-500">Cloud Infrastructure | Linux | Automation</p>
      </div>
    </div>
  )
}
