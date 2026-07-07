import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDetails from '../components/Products/ProductsDetails'
import ProductGrid from '../components/Products/ProductGrid'

export const dummyProducts = [
  {
    _id: "1",
    name: "Stylish Leather Jacket",
    price: 120,
    originalPrice: 150,
    description: "Premium leather jacket perfect for any occasion",
    brand: "Fashion Brand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Red"],
    rating: 4.5,
    reviews: 128,
    images: [
      {
        url: "https://picsum.photos/400/400?random=1",
        altText: "Stylish Leather Jacket"
      },
      {
        url: "https://picsum.photos/400/400?random=2",
        altText: "Stylish Leather Jacket Back"
      }
    ]
  },
  {
    _id: "2",
    name: "Casual Denim Jeans",
    price: 75,
    originalPrice: 95,
    description: "Comfortable denim jeans for everyday wear",
    brand: "Denim Co",
    material: "Cotton",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    rating: 4.2,
    reviews: 256,
    images: [
      {
        url: "https://picsum.photos/400/400?random=3",
        altText: "Casual Denim Jeans"
      }
    ]
  },
  {
    _id: "3",
    name: "Summer Floral Dress",
    price: 95,
    originalPrice: 120,
    description: "Beautiful floral dress perfect for summer",
    brand: "Summer Collection",
    material: "Cotton",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Pink", "Yellow"],
    rating: 4.7,
    reviews: 89,
    images: [
      {
        url: "https://picsum.photos/400/400?random=4",
        altText: "Summer Floral Dress"
      }
    ]
  },
  {
    _id: "4",
    name: "Leather Sneakers",
    price: 85,
    originalPrice: 110,
    description: "Premium leather sneakers with comfort sole",
    brand: "Sneaker Pro",
    material: "Leather",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Red"],
    rating: 4.4,
    reviews: 312,
    images: [
      {
        url: "https://picsum.photos/400/400?random=5",
        altText: "Leather Sneakers"
      }
    ]
  },
  {
    _id: "5",
    name: "Wool Sweater",
    price: 110,
    originalPrice: 140,
    description: "Warm wool sweater for cold weather",
    brand: "Winter Wear",
    material: "Wool",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Navy", "Burgundy"],
    rating: 4.3,
    reviews: 167,
    images: [
      {
        url: "https://picsum.photos/400/400?random=6",
        altText: "Wool Sweater"
      }
    ]
  },
  {
    _id: "6",
    name: "Cotton T-Shirt Pack",
    price: 45,
    originalPrice: 60,
    description: "Pack of 3 premium cotton t-shirts",
    brand: "Comfort Wear",
    material: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    rating: 4.1,
    reviews: 534,
    images: [
      {
        url: "https://picsum.photos/400/400?random=7",
        altText: "Cotton T-Shirt Pack"
      }
    ]
  },
  {
    _id: "7",
    name: "Sports Cap",
    price: 25,
    originalPrice: 35,
    description: "Lightweight sports cap with adjustable strap",
    brand: "Sport Pro",
    material: "Polyester",
    sizes: ["One Size"],
    colors: ["Black", "White", "Blue"],
    rating: 4.0,
    reviews: 89,
    images: [
      {
        url: "https://picsum.photos/400/400?random=8",
        altText: "Sports Cap"
      }
    ]
  },
  {
    _id: "8",
    name: "Winter Gloves",
    price: 35,
    originalPrice: 45,
    description: "Warm winter gloves with touchscreen compatibility",
    brand: "Winter Gear",
    material: "Wool",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.6,
    reviews: 45,
    images: [
      {
        url: "https://picsum.photos/400/400?random=9",
        altText: "Winter Gloves"
      }
    ]
  },
  {
    _id: "9",
    name: "Designer Handbag",
    price: 200,
    originalPrice: 280,
    description: "Elegant handbag for special occasions",
    brand: "Luxury Brand",
    material: "Leather",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Red"],
    rating: 4.8,
    reviews: 234,
    images: [
      {
        url: "https://picsum.photos/400/400?random=10",
        altText: "Designer Handbag"
      }
    ]
  },
  {
    _id: "10",
    name: "Running Shoes",
    price: 130,
    originalPrice: 160,
    description: "Professional running shoes with cushioning",
    brand: "Run Tech",
    material: "Synthetic",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Blue", "Red", "Black"],
    rating: 4.5,
    reviews: 456,
    images: [
      {
        url: "https://picsum.photos/400/400?random=11",
        altText: "Running Shoes"
      }
    ]
  },
  {
    _id: "11",
    name: "Sunglasses",
    price: 65,
    originalPrice: 85,
    description: "UV protection sunglasses with polarized lenses",
    brand: "Vision Pro",
    material: "Plastic",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Gold"],
    rating: 4.3,
    reviews: 178,
    images: [
      {
        url: "https://picsum.photos/400/400?random=12",
        altText: "Sunglasses"
      }
    ]
  },
  {
    _id: "12",
    name: "Smart Watch",
    price: 250,
    originalPrice: 300,
    description: "Smart watch with fitness tracking",
    brand: "Tech Wear",
    material: "Silicone",
    sizes: ["One Size"],
    colors: ["Black", "Silver", "Gold"],
    rating: 4.7,
    reviews: 567,
    images: [
      {
        url: "https://picsum.photos/400/400?random=13",
        altText: "Smart Watch"
      }
    ]
  }
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>

        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>
          Best Seller           
        </h2>
        <ProductsDetails/>

        {/*You may also like these products  */}
        <h2 className='text-3xl text-center font-bold mb-4'>
          Featured Products         
        </h2>
         <ProductGrid 
        products={dummyProducts} 
        title="Featured Products"
        columns={4} // 1-6 columns supported
      />

    </div>
  )
}

export default Home