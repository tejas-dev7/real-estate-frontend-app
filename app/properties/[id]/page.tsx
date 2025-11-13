'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Heart, 
  Share2, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Home as HomeIcon,
  Car,
  Wind,
  Zap,
  Droplets,
  Trees,
  Shield,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  Mail,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react'
import PropertyCard from '@/components/PropertyCard'
import Footer from '@/components/Footer'
import DesktopNav from '@/components/navigation/DesktopNav'
import MobileBottomNav from '@/components/navigation/MobileBottomNav'

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  
  const [property, setProperty] = useState<any>(null)
  const [properties, setProperties] = useState<any[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImageModal, setShowImageModal] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in this property. Please contact me with more details.'
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    fetchProperties()
    // TODO: Load favorites from localStorage or global state
  }, [params.id])

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties')
      const data = await response.json()
      setProperties(data)
      const foundProperty = data.find((p: any) => p.id === params.id)
      setProperty(foundProperty)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching properties:', error)
      setLoading(false)
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  if (loading) {
    return (
      <>
        <DesktopNav />
        <MobileBottomNav favoritesCount={favorites.length} />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Loading property details...</p>
        </div>
      </>
    )
  }

  if (!property) {
    return (
      <>
        <DesktopNav />
        <MobileBottomNav favoritesCount={favorites.length} />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <p className="text-xl mb-4">Property not found</p>
          <Button onClick={() => router.push('/properties')}>
            Back to Properties
          </Button>
        </div>
      </>
    )
  }

  // Property images (main image + additional images)
  const propertyImages = [
    property.image,
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'
  ]

  const features = [
    { icon: Car, label: 'Garage', value: '2 Car' },
    { icon: Wind, label: 'AC', value: 'Central Air' },
    { icon: Zap, label: 'Heating', value: 'Gas' },
    { icon: Droplets, label: 'Pool', value: property.type === 'house' ? 'Yes' : 'No' },
    { icon: Trees, label: 'Garden', value: property.type === 'house' ? 'Yes' : 'No' },
    { icon: Shield, label: 'Security', value: '24/7' },
    { icon: Calendar, label: 'Year Built', value: '2020' },
    { icon: HomeIcon, label: 'Lot Size', value: '0.25 acres' }
  ]

  const amenities = [
    'Hardwood Floors',
    'Granite Countertops',
    'Stainless Steel Appliances',
    'Walk-in Closets',
    'High Ceilings',
    'Natural Light',
    'Updated Kitchen',
    'Modern Bathrooms',
    'Energy Efficient',
    'Smart Home Ready',
    'Pet Friendly',
    'Washer/Dryer Included'
  ]

  // Find similar properties
  const similarProperties = properties
    .filter(p => 
      p.id !== property.id && 
      p.type === property.type &&
      Math.abs(p.price - property.price) < 500000
    )
    .slice(0, 3)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href
      })
    } else {
      alert('Share link copied to clipboard!')
    }
  }

  return (
    <>
      <DesktopNav />
      <MobileBottomNav favoritesCount={favorites.length} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 md:top-16 z-40">
          <div className="container px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => router.back()}
                className="-ml-2"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart 
                    className={`h-5 w-5 ${
                      favorites.includes(property.id) 
                        ? 'fill-red-500 text-red-500' 
                        : ''
                    }`} 
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6 md:py-8">
          <div className="max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div className="mb-6 md:mb-8">
              <div className="relative h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-4">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                />
                {property.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {propertyImages.length}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {propertyImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-16 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      idx === currentImageIndex 
                        ? 'ring-2 ring-emerald-600 opacity-100' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Property Info */}
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-2">{property.title}</CardTitle>
                        <CardDescription className="flex items-center text-base">
                          <MapPin className="h-5 w-5 mr-2" />
                          {property.location}, {property.city}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                          {formatPrice(property.price)}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          ${Math.round(property.price / property.sqft)}/sqft
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <Bed className="h-6 w-6 mx-auto mb-2 text-emerald-600" />
                        <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600">Bedrooms</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <Bath className="h-6 w-6 mx-auto mb-2 text-emerald-600" />
                        <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                        <div className="text-sm text-gray-600">Bathrooms</div>
                      </div>
                      <div className="text-center">
                        <Square className="h-6 w-6 mx-auto mb-2 text-emerald-600" />
                        <div className="text-2xl font-bold text-gray-900">{property.sqft}</div>
                        <div className="text-sm text-gray-600">Sq Ft</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>About This Property</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {property.description || `Beautiful ${property.type} in ${property.city}`}
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      This stunning {property.type} offers the perfect blend of luxury and comfort. 
                      Located in the desirable {property.city} area, you'll enjoy easy access to shopping, 
                      dining, and entertainment. The spacious layout features {property.bedrooms} bedrooms 
                      and {property.bathrooms} bathrooms, with premium finishes throughout. Don't miss this 
                      opportunity to own a piece of paradise!
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle>Property Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {features.map((feature, idx) => {
                        const Icon = feature.icon
                        return (
                          <div key={idx} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                            <Icon className="h-6 w-6 text-emerald-600 mb-2" />
                            <div className="font-semibold text-sm text-gray-900">{feature.label}</div>
                            <div className="text-xs text-gray-600 mt-1">{feature.value}</div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Amenities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                    <CardDescription>
                      <MapPin className="h-4 w-4 inline mr-1" />
                      {property.location}, {property.city}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>Map view coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 lg:sticky lg:top-36 lg:self-start">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule a Viewing</CardTitle>
                    <CardDescription>Get in touch with us about this property</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle2 className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">We'll contact you soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Name</label>
                          <Input
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone</label>
                          <Input
                            type="tel"
                            required
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Message</label>
                          <Textarea
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                            placeholder="Tell us about your requirements..."
                          />
                        </div>
                        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-sm text-gray-600">Phone</div>
                        <div className="font-medium">1-800-HAVENLY</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-medium">info@havenly.com</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Similar Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {similarProperties.map((prop) => (
                    <PropertyCard
                      key={prop.id}
                      property={prop}
                      favorites={favorites}
                      toggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Modal */}
        {showImageModal && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            <img
              src={propertyImages[currentImageIndex]}
              alt={property.title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
              {currentImageIndex + 1} / {propertyImages.length}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  )
}
