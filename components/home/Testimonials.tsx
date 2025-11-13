import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'Homebuyer', text: 'Havenly made finding my dream home so easy. The search filters are intuitive and I found the perfect place in just 2 weeks!', rating: 5 },
    { name: 'Michael Chen', role: 'Property Investor', text: 'As an investor, I appreciate the detailed property information and the responsive platform. Highly recommended!', rating: 5 },
    { name: 'Emily Rodriguez', role: 'First-time Buyer', text: 'The team at Havenly guided me through every step. Professional, friendly, and incredibly helpful.', rating: 5 }
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600">Over 10,000 happy homeowners</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic text-sm md:text-base">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
