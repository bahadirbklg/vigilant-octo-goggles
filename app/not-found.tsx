import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

export const metadata = {
  title: "Page Not Found | Bahadir Bakkaloglu",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-lg shadow-md text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <Home size={18} />
            Back to Homepage
          </Link>

          <div className="flex gap-4">
            <Link
              href="/#experience"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Search size={18} />
              Experience
            </Link>

            <Link
              href="/#contact"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
            >
              <ArrowLeft size={18} />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
