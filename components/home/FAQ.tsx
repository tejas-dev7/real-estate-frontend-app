import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FAQ() {
  const faqs = [
    { q: 'How do I search for properties?', a: 'Use our intuitive search bar at the top of the page. You can filter by location, price, property type, and more.' },
    { q: 'Are property listings updated in real-time?', a: 'Yes! Our listings are updated daily to ensure you have access to the latest available properties.' },
    { q: 'Can I schedule a viewing?', a: 'Absolutely! Click on any property and use the "Schedule Viewing" button to book an appointment.' },
    { q: 'Do you charge buyers any fees?', a: 'No, our service is completely free for buyers. We work with sellers and agents to provide you the best experience.' }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600">Everything you need to know</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-base md:text-lg text-emerald-700">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm md:text-base">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
