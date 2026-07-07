import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products, title, columns = 4 }) => {
  // If no products, show empty state
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products available</p>
      </div>
    )
  }

  // Determine grid columns based on prop
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="h-0.5 w-12 bg-rabbit-red mt-1"></div>
        </div>
      )}

      {/* Product Grid */}
      <div className={`grid ${gridCols[columns] || gridCols[4]} gap-6`}>
        {products.map((product) => (
          <Link 
            key={product._id} 
            to={`/product/${product._id}`}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square">
              <img
                src={product.images?.[0]?.url || 'https://picsum.photos/400/400?random=1'}
                alt={product.images?.[0]?.altText || product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Discount Badge */}
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="absolute top-2 left-2 bg-rabbit-red text-white text-xs font-semibold px-2 py-1 rounded">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}

              {/* Quick View Overlay (optional) */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-rabbit-red transition-colors line-clamp-2">
                {product.name}
              </h3>

              {/* Product Brand */}
              {product.brand && (
                <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
              )}

              {/* Price Section */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-bold text-rabbit-red">
                  ${product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Rating (optional) */}
              {product.rating && (
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                  {product.reviews && (
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  )}
                </div>
              )}

              {/* Add to Cart Button (optional) */}
              <button 
                className="w-full mt-3 bg-rabbit-red hover:bg-secondary-red text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault() // Prevent navigation when clicking add to cart
                  // Add to cart logic here
                  console.log('Add to cart:', product._id)
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid