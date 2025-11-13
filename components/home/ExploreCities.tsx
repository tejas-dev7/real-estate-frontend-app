'use client'

import { useRouter } from 'next/navigation'

export default function ExploreCities() {
  const router = useRouter()
  
  const cities = [
    {
      name: "Miami",
      count: 1234,
      image:
        "https://images.unsplash.com/photo-1704080864842-2577d94ebb1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHNreWxpbmV8ZW58MHx8fHwxNzYyMTgwOTgxfDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "New York",
      count: 2156,
      image:
        "https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHx1cmJhbiUyMHNreWxpbmV8ZW58MHx8fHwxNzYyMTgwOTgxfDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Los Angeles",
      count: 1876,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjE4MDk3Nnww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Chicago",
      count: 987,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      name: "San Francisco",
      count: 1543,
      image:
        "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg",
    },
    {
      name: "Boston",
      count: 743,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85",
    },
  ];

  const handleCityClick = (cityName: string) => {
    router.push(`/properties?location=${encodeURIComponent(cityName)}`)
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Explore by City
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Find homes in your favorite locations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="relative h-40 md:h-48 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => handleCityClick(city.name)}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3 md:p-4">
                <h3 className="text-white font-bold text-base md:text-lg">
                  {city.name}
                </h3>
                <p className="text-white/90 text-xs md:text-sm">
                  {city.count} properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
