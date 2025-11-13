'use client'

import HeroSection from "@/components/home/HeroSection"
import FeaturedProperties from "@/components/home/FeaturedProperties"
import ExploreCities from "@/components/home/ExploreCities"
import Testimonials from "@/components/home/Testimonials"
import FAQ from "@/components/home/FAQ"
import AboutUs from "@/components/home/AboutUs"
import Footer from "@/components/Footer"
import DesktopNav from "@/components/navigation/DesktopNav"
import MobileBottomNav from "@/components/navigation/MobileBottomNav"

export default function HomePage() {
  return (
    <>
      <DesktopNav />
      <MobileBottomNav />
      
      <HeroSection />
      <FeaturedProperties />
      <ExploreCities />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <Footer />
    </>
  )
}
