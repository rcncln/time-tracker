
'use client'
import Link from "next/link"

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-50">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-50">Page Not Found</h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}
