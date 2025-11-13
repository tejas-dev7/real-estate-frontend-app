'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export default function HeroSection() {
  const router = useRouter()
  const [searchLocation, setSearchLocation] = useState('')
  const [propertyType, setPropertyType] = useState('any')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchLocation) params.set('location', searchLocation)
    if (propertyType !== 'any') params.set('type', propertyType)
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">Find Your Dream Home</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200">Discover the perfect place to call home from over 10,000 properties</p>
        
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm py-0">
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-3 md:gap-4 w-full">
              <Input 
                placeholder="Location" 
                className="w-full"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Type</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
