import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-green-600 rounded"></div>
            <span className="inline-block font-bold">NVIDIA</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/gpu-explained" className="text-sm font-medium transition-colors hover:text-green-600">
              GPU Explained
            </Link>
            <Link href="/performance-comparison" className="text-sm font-medium transition-colors hover:text-green-600">
              Performance Comparison
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" className="hidden md:flex">
            Joco
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Shop Now</Button>
        </div>
      </div>
    </header>
  )
}
