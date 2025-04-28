import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2023 NVIDIA Corporation. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Terms
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
