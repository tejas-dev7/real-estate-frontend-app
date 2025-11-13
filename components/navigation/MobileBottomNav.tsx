'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Heart, User } from 'lucide-react'

interface MobileBottomNavProps {
  favoritesCount?: number;
}

export default function MobileBottomNav({ favoritesCount = 0 }: MobileBottomNavProps) {
  const pathname = usePathname()

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'listings', icon: Search, label: 'Search', href: '/properties' },
    { id: 'favorites', icon: Heart, label: 'Saved', href: '/favourites' },
    { id: 'profile', icon: User, label: 'Profile', href: '/profile' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href
  }

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white shadow-sm sticky top-0 z-50">
        <div className="container px-4">
          <div className="flex items-center justify-center h-16">
            <Link 
              href="/"
              className="text-2xl font-bold text-emerald-600 cursor-pointer"
            >
              Havenly
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            const showBadge = item.id === 'favorites' && favoritesCount > 0
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                  active
                    ? 'text-emerald-600' 
                    : 'text-gray-500 active:text-emerald-500'
                }`}
              >
                <div className="relative">
                  <Icon className={`h-6 w-6 ${
                    active ? 'fill-emerald-600' : ''
                  }`} />
                  {showBadge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {favoritesCount}
                    </span>
                  )}
                </div>
                <span className={`text-xs font-medium ${
                  active ? 'text-emerald-600' : ''
                }`}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Spacer for bottom nav on mobile */}
      <div className="h-16 md:hidden"></div>
    </>
  )
}
