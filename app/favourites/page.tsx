'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import PropertyCard from '@/components/PropertyCard'
import Footer from '@/components/Footer'
import DesktopNav from '@/components/navigation/DesktopNav'
import MobileBottomNav from '@/components/navigation/MobileBottomNav'

export default function FavoritesPage() {
  const router = useRouter()
  const [properties, setProperties] = useState<any[]>([])
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    fetchProperties()
    // TODO: Load favorites from localStorage or global state
  }, [])

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties')
      const data = await response.json()
      setProperties(data)
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }

  const toggleFavorite = (propertyId: string | number) => {
    const id = String(propertyId)
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    )
  }

  const favoriteProperties = properties.filter(p => favorites.includes(p.id))

  return (
    <>
      <DesktopNav />
      <MobileBottomNav favoritesCount={favorites.length} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="container px-4 py-6">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-emerald-600 fill-emerald-600" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Saved Properties
              </h1>
            </div>
            <p className="text-gray-600 mt-2">{favoriteProperties.length} saved homes</p>
          </div>
        </div>

        <div className="container px-4 py-6 md:py-8">
          {favoriteProperties.length === 0 ? (
            <Card className="p-12 text-center">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved properties yet</h3>
              <p className="text-gray-600 mb-6">Start exploring and save your favorite homes!</p>
              <Button 
                onClick={() => router.push('/properties')}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Browse Properties
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {favoriteProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </>
  )
}
