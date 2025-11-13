'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function DesktopNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname?.startsWith(path)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 hidden md:block">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-600 cursor-pointer">
            Havenly
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/"
              className={`transition-colors font-medium ${
                isActive('/')
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/properties"
              className={`transition-colors font-medium ${
                isActive('/properties')
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Properties
            </Link>
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </button>
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Contact
            </button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
