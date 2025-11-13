import { NextResponse } from 'next/server'

// Sample property data for seeding
const sampleProperties = [
  {
    id: '1',
    title: 'Luxury Family Home in Beverly Hills',
    description: 'Stunning 4-bedroom home with modern amenities and beautiful landscaping.',
    price: 1250000,
    location: '123 Luxury Lane',
    city: 'Beverly Hills',
    state: 'CA',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'house',
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
    featured: true,
    listedDate: new Date('2025-06-01')
  },
  {
    id: '2',
    title: 'Modern Pool Estate in Miami',
    description: 'Gorgeous 5-bedroom estate featuring a resort-style pool and outdoor entertainment area.',
    price: 2100000,
    location: '456 Ocean Drive',
    city: 'Miami',
    state: 'FL',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    type: 'house',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
    featured: true,
    listedDate: new Date('2025-06-05')
  },
  {
    id: '3',
    title: 'Contemporary Apartment in Manhattan',
    description: 'Spacious 3-bedroom apartment with city views and modern finishes.',
    price: 850000,
    location: '789 Park Avenue',
    city: 'New York',
    state: 'NY',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: 'apartment',
    image: 'https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjE4MDk3Nnww&ixlib=rb-4.1.0&q=85',
    featured: false,
    listedDate: new Date('2025-06-03')
  },
  {
    id: '4',
    title: 'Urban Loft in Chicago',
    description: 'Chic 2-bedroom loft in the heart of downtown with exposed brick.',
    price: 625000,
    location: '321 State Street',
    city: 'Chicago',
    state: 'IL',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    type: 'condo',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    featured: false,
    listedDate: new Date('2025-06-07')
  },
  {
    id: '5',
    title: 'Waterfront Villa in San Diego',
    description: 'Breathtaking 6-bedroom villa with private beach access.',
    price: 3500000,
    location: '555 Coastal Way',
    city: 'San Diego',
    state: 'CA',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    type: 'house',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
    featured: true,
    listedDate: new Date('2025-06-10')
  },
  {
    id: '6',
    title: 'Cozy Cottage in Portland',
    description: 'Charming 3-bedroom cottage with a large backyard and garden.',
    price: 475000,
    location: '888 Forest Road',
    city: 'Portland',
    state: 'OR',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: 'house',
    image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
    featured: false,
    listedDate: new Date('2025-06-02')
  },
  {
    id: '7',
    title: 'Downtown Penthouse in Seattle',
    description: 'Luxury 4-bedroom penthouse with panoramic city views.',
    price: 1850000,
    location: '999 Pike Street',
    city: 'Seattle',
    state: 'WA',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    type: 'apartment',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
    featured: true,
    listedDate: new Date('2025-06-08')
  },
  {
    id: '8',
    title: 'Suburban Home in Austin',
    description: 'Family-friendly 4-bedroom home in a great neighborhood.',
    price: 550000,
    location: '111 Oak Avenue',
    city: 'Austin',
    state: 'TX',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'house',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjE4MDk3Nnww&ixlib=rb-4.1.0&q=85',
    featured: false,
    listedDate: new Date('2025-06-04')
  },
  {
    id: '9',
    title: 'Historic Brownstone in Boston',
    description: 'Beautifully restored 5-bedroom brownstone with original details.',
    price: 1650000,
    location: '222 Beacon Street',
    city: 'Boston',
    state: 'MA',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'house',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjE4MDk3Nnww&ixlib=rb-4.1.0&q=85',
    featured: false,
    listedDate: new Date('2025-06-06')
  },
  {
    id: '10',
    title: 'Modern Condo in Denver',
    description: 'Sleek 2-bedroom condo with mountain views and amenities.',
    price: 425000,
    location: '333 Mountain View',
    city: 'Denver',
    state: 'CO',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'condo',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjE4MDk3Nnww&ixlib=rb-4.1.0&q=85',
    featured: false,
    listedDate: new Date('2025-06-09')
  },
  {
    id: '11',
    title: 'Ranch Style Home in Phoenix',
    description: 'Spacious 5-bedroom ranch with pool and desert landscaping.',
    price: 675000,
    location: '444 Desert Drive',
    city: 'Phoenix',
    state: 'AZ',
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3500,
    type: 'house',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc2MjE4MDk3MXww&ixlib=rb-4.1.0&q=85',
    featured: false,
    listedDate: new Date('2025-06-11')
  },
  {
    id: '12',
    title: 'Artist Loft in Los Angeles',
    description: 'Creative 2-bedroom loft in arts district with high ceilings.',
    price: 725000,
    location: '666 Arts Plaza',
    city: 'Los Angeles',
    state: 'CA',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1900,
    type: 'apartment',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    featured: false,
    listedDate: new Date('2025-06-12')
  }
]

// Seed database with sample data
// async function seedDatabase() {
//   const database = await connectDB()
//   const collection = database.collection('properties')
  
//   const count = await collection.countDocuments()
//   if (count === 0) {
//     await collection.insertMany(sampleProperties)
//     console.log('Database seeded with sample properties')
//   }
// }

// GET /api/properties - Get all properties with optional filters
export async function GET() {
  try {
    // const database = await connectDB()
    // await seedDatabase()
    
    // const collection = database.collection('properties')
    // const properties = await collection.find({}).toArray()
    
    return NextResponse.json(sampleProperties, { status: 200 })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

// // POST /api/properties - Create a new property
// export async function POST(request) {
//   try {
//     const database = await connectDB()
//     const collection = database.collection('properties')
    
//     const body = await request.json()
//     const newProperty = {
//       ...body,
//       id: Date.now().toString(),
//       listedDate: new Date()
//     }
    
//     const result = await collection.insertOne(newProperty)
    
//     return NextResponse.json(
//       { message: 'Property created', property: newProperty },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Error creating property:', error)
//     return NextResponse.json(
//       { error: 'Failed to create property' },
//       { status: 500 }
//     )
//   }
// }

// // Handle other HTTP methods
// export async function PUT(request) {
//   return NextResponse.json({ error: 'Method not implemented' }, { status: 501 })
// }

// export async function DELETE(request) {
//   return NextResponse.json({ error: 'Method not implemented' }, { status: 501 })
// }
