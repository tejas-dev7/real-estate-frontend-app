import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Home, Building2, Trees, Warehouse } from 'lucide-react'

interface FilterSidebarProps {
  priceRange: number[];
  setPriceRange: (price: number[]) => void;
  bedrooms: string;
  setBedrooms: (bedrooms: string) => void;
  bathrooms: string;
  setBathrooms: (bathrooms: string) => void;
  propertyType: string;
  setPropertyType: (propertyType: string) => void;
  formatPrice: (price: number) => string;
  resetFilters: () => void;
}

export default function FilterSidebar({
  priceRange,
  setPriceRange,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  propertyType,
  setPropertyType,
  formatPrice,
  resetFilters
}: FilterSidebarProps) {
  return (
    <aside className="lg:w-80 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <label className="text-sm font-semibold mb-2 block">Price Range</label>
            <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
            <Slider 
              value={priceRange}
              onValueChange={setPriceRange}
              min={0}
              max={5000000}
              step={50000}
              className="mb-2"
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="text-sm font-semibold mb-2 block">Bedrooms</label>
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="text-sm font-semibold mb-2 block">Bathrooms</label>
            <Select value={bathrooms} onValueChange={setBathrooms}>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div>
            <label className="text-sm font-semibold mb-2 block">Property Type</label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Type</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
        </CardContent>
      </Card>

      {/* Property Type Icons */}
      <Card className="hidden lg:block">
        <CardHeader>
          <CardTitle className="text-sm">Browse by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              className="h-20 flex flex-col"
              onClick={() => setPropertyType('house')}
            >
              <Home className="h-6 w-6 mb-1" />
              <span className="text-xs">Houses</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col"
              onClick={() => setPropertyType('apartment')}
            >
              <Building2 className="h-6 w-6 mb-1" />
              <span className="text-xs">Apartments</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col"
              onClick={() => setPropertyType('condo')}
            >
              <Warehouse className="h-6 w-6 mb-1" />
              <span className="text-xs">Condos</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col"
              onClick={() => setPropertyType('land')}
            >
              <Trees className="h-6 w-6 mb-1" />
              <span className="text-xs">Land</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
