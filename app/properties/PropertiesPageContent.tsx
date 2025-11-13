'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import DesktopNav from '@/components/navigation/DesktopNav'
import MobileBottomNav from '@/components/navigation/MobileBottomNav'
import Listings from './Listings'

export default function PropertiesPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [properties, setProperties] = useState<any[]>([])
  const [filteredProperties, setFilteredProperties] = useState<any[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  
  // Filter states - initialize from URL params
  const [searchLocation, setSearchLocation] = useState(searchParams.get('location') || '')
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000000])
  const [bedrooms, setBedrooms] = useState('any')
  const [bathrooms, setBathrooms] = useState('any')
  const [propertyType, setPropertyType] = useState(searchParams.get('type') || 'any')
  const [sortBy, setSortBy] = useState('relevance')

  // Fetch properties
  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties')
      const data = await response.json()
      setProperties(data)
      setFilteredProperties(data)
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }

  // Apply filters
  useEffect(() => {
    let filtered = [...properties]

    if (searchLocation) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        p.city.toLowerCase().includes(searchLocation.toLowerCase())
      )
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (bedrooms !== 'any') {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms))
    }

    if (bathrooms !== 'any') {
      filtered = filtered.filter(p => p.bathrooms >= parseInt(bathrooms))
    }

    if (propertyType !== 'any') {
      filtered = filtered.filter(p => p.type.toLowerCase() === propertyType.toLowerCase())
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime())
    }

    setFilteredProperties(filtered)
  }, [searchLocation, priceRange, bedrooms, bathrooms, propertyType, sortBy, properties])

  const toggleFavorite = (propertyId: string | number) => {
    const id = String(propertyId)
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  const resetFilters = () => {
    setSearchLocation('')
    setPriceRange([0, 5000000])
    setBedrooms('any')
    setBathrooms('any')
    setPropertyType('any')
  }

  const handlePropertyClick = (property: any) => {
    // TODO: Navigate to property detail page
    router.push(`/properties/${property.id}`)
  }

  return (
    <>
      <DesktopNav />
      <MobileBottomNav favoritesCount={favorites.length} />
      
      <Listings
        filteredProperties={filteredProperties}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
        sortBy={sortBy}
        setSortBy={setSortBy}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        formatPrice={formatPrice}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        resetFilters={resetFilters}
        setSelectedProperty={handlePropertyClick}
      />
    </>
  )
}

