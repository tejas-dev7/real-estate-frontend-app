'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react'

interface Property {
  id: string | number;
  image: string;
  title: string;
  location: string;
  city?: string;
  price: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  baths?: number;
  sqft: number;
  type?: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  favorites?: string[] | number[];
  toggleFavorite?: (propertyId: string | number) => void;
  onPropertyClick?: (property: Property) => void;
}

export default function PropertyCard({ 
  property, 
  favorites = [], 
  toggleFavorite,
  onPropertyClick 
}: PropertyCardProps) {
  const router = useRouter()
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleClick = () => {
    if (onPropertyClick) {
      onPropertyClick(property)
    } else {
      router.push(`/properties/${property.id}`)
    }
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (toggleFavorite) {
      toggleFavorite(property.id)
    }
  }

  // Handle both property data formats
  const beds = property.bedrooms || property.beds || 0
  const baths = property.bathrooms || property.baths || 0
  const isFavorite = favorites.some(fav => String(fav) === String(property.id))

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden pt-0" 
      onClick={handleClick}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {toggleFavorite && (
          <button 
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10"
            onClick={handleFavoriteClick}
          >
            <Heart 
              className={`h-5 w-5 ${
                isFavorite
                  ? 'fill-red-500 text-red-500' 
                  : 'text-gray-600'
              }`} 
            />
          </button>
        )}
        
        <div className="absolute bottom-4 left-4">
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {formatPrice(property.price)}
          </span>
        </div>
        
        {property.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg line-clamp-1">{property.title}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 shrink-0" />
          <span className="line-clamp-1">
            {property.city ? `${property.location}, ${property.city}` : property.location}
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {beds}
          </span>
          <span className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {baths}
          </span>
          <span className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {property.sqft}
          </span>
        </div>
        
        {property.type && (
          <div className="mt-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              {property.type}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

