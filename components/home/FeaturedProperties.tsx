'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import PropertyCard from '@/components/PropertyCard'

export default function FeaturedProperties() {
  const featured = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
      price: 1250000,
      title: 'Luxury Family Home',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: 3200
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
      price: 2100000,
      title: 'Modern Pool Estate',
      location: 'Miami, FL',
      beds: 5,
      baths: 4,
      sqft: 4500
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjE4MDk3Nnww&ixlib=rb-4.1.0&q=85',
      price: 850000,
      title: 'Contemporary Apartment',
      location: 'Manhattan, NY',
      beds: 3,
      baths: 2,
      sqft: 2100
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      price: 625000,
      title: 'Urban Loft',
      location: 'Chicago, IL',
      beds: 2,
      baths: 2,
      sqft: 1800
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Featured Properties</h2>
          <p className="text-lg md:text-xl text-gray-600">Handpicked homes just for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-6 md:mt-8">
          <Link href="/properties">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white hover:bg-gray-50"
            >
              View All Properties <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
