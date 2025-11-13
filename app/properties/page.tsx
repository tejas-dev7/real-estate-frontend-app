'use client'

import { Suspense } from 'react'
import PropertiesPageContent from './PropertiesPageContent'

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading properties...</p>
      </div>
    }>
      <PropertiesPageContent />
    </Suspense>
  )
}
