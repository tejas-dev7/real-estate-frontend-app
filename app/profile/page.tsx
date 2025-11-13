'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Mail, Phone, MapPin, Bell, Heart, Search } from 'lucide-react'
import Footer from '@/components/Footer'
import DesktopNav from '@/components/navigation/DesktopNav'
import MobileBottomNav from '@/components/navigation/MobileBottomNav'

export default function ProfilePage() {
  // TODO: Replace with actual favorites from global state/context
  const favorites = []

  return (
    <>
      <DesktopNav />
      <MobileBottomNav favoritesCount={favorites.length} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="container px-4 py-8 md:py-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-full flex items-center justify-center mb-4">
                <User className="h-10 w-10 md:h-12 md:w-12 text-emerald-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-emerald-100">Member since June 2025</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6 md:py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{favorites.length}</div>
                  <div className="text-sm text-gray-600">Saved</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Search className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Searches</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Bell className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Alerts</div>
                </CardContent>
              </Card>
            </div>

            {/* Account Information */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-medium">john.doe@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Phone</div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-medium">New York, NY</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Notification Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Saved Searches
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  )
}
