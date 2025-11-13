'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-emerald-400">Havenly</h3>
            <p className="text-gray-400 text-sm md:text-base">Your trusted partner in finding the perfect home.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/properties" className="hover:text-emerald-400 transition-colors">Properties</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Buyer's Guide</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Seller's Guide</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>info@havenly.com</li>
              <li>1-800-HAVENLY</li>
              <li>123 Real Estate Ave</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2025 Havenly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
