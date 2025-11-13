import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PropertyCard from '@/components/PropertyCard'
import FilterSidebar from './FilterSidebar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'

interface ListingsProps {
  filteredProperties: any[];
  searchLocation: string;
  setSearchLocation: (location: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  priceRange: number[];
  setPriceRange: (price: number[]) => void;
  bedrooms: string;
  setBedrooms: (bedrooms: string) => void;
  bathrooms: string;
  setBathrooms: (bathrooms: string) => void;
  propertyType: string;
  setPropertyType: (propertyType: string) => void;
  formatPrice: (price: number) => string;
  favorites: any[];
  toggleFavorite: (propertyId: string | number) => void;
  resetFilters: () => void;
  setSelectedProperty: (property: any) => void;
}

export default function Listings({
  filteredProperties,
  searchLocation,
  setSearchLocation,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  propertyType,
  setPropertyType,
  formatPrice,
  favorites,
  toggleFavorite,
  resetFilters,
  setSelectedProperty
}: ListingsProps) {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with filters bar */}
      <div className="bg-white shadow-sm sticky top-0 md:top-16 z-40">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties
            </h1>
            <Button variant="outline" size="sm" onClick={() => router.push('/')} className="hidden md:inline-flex">
              Back to Home
            </Button>
          </div>
          
          {/* Quick search bar */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Search location..." 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32 md:w-40">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low</SelectItem>
                <SelectItem value="price-high">Price: High</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="container px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Sidebar Filters - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <FilterSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              bathrooms={bathrooms}
              setBathrooms={setBathrooms}
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              formatPrice={formatPrice}
              resetFilters={resetFilters}
            />
          </div>

          {/* Property Grid */}
          <div className="flex-1">
            {filteredProperties.length === 0 ? (
              <Card className="p-8 md:p-12 text-center">
                <p className="text-gray-500 text-base md:text-lg">No properties found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={resetFilters}
                >
                  Clear All Filters
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    onPropertyClick={setSelectedProperty}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
