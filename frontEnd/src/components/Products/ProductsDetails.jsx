import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { toast } from 'sonner'

const selectedProducts = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "Fashion Brand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/200/200?random=1",
      altText: "Stylish Jacket 1"
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2"
    }
  ]
}

const ProductsDetails = () => {
  // All states
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  // Quantity handlers
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  // Add to Cart function
  const addToCart = () => {
    // Get selected values
    const selectedColorValue = selectedProducts.colors[selectedColor]
    const selectedSizeValue = selectedProducts.sizes[selectedSize]
    
    // Validate if color is selected
    if (!selectedColorValue) {
      toast.error('Please select a color')
      return
    }

    // Validate if size is selected
    if (!selectedSizeValue) {
      toast.error('Please select a size')
      return
    }

    // Create cart item
    const cartItem = {
      id: Date.now(),
      name: selectedProducts.name,
      price: selectedProducts.price,
      quantity: quantity,
      color: selectedColorValue,
      size: selectedSizeValue,
      image: selectedProducts.images[selectedImage].url,
      totalPrice: selectedProducts.price * quantity
    }

    // Disable button and show loading state
    setIsAddingToCart(true)

    // Simulate API call or add to cart logic
    console.log("Adding to cart:", cartItem)
    
    // Simulate async operation
    setTimeout(() => {
      setIsAddingToCart(false)
      // Show success toast
      toast.success(`${cartItem.name} added to cart successfully!`, {
        description: `Size: ${cartItem.size}, Color: ${cartItem.color}, Qty: ${cartItem.quantity}`,
        duration: 3000,
      })
      
      // Optional: Reset quantity after adding to cart
      // setQuantity(1)
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-6xl w-full mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        {/* Row 1: Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Product Details</h1>
          <div className="h-0.5 w-12 bg-rabbit-red mt-1"></div>
        </div>

        {/* Row 2: Images Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-3">
            {selectedProducts.images.map((image, index) => (
              <div 
                key={index}
                className={`relative cursor-pointer transition-all ${
                  index === selectedImage 
                    ? 'ring-2 ring-rabbit-red ring-offset-2 rounded-lg' 
                    : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.altText}
                  className={`w-20 h-20 object-cover rounded-lg border-2 transition-all ${
                    index === selectedImage 
                      ? 'border-rabbit-red shadow-md' 
                      : 'border-transparent hover:border-rabbit-red hover:shadow-sm'
                  }`}
                />
                {index === selectedImage && (
                  <div className="absolute inset-0 bg-rabbit-red bg-opacity-10 rounded-lg"></div>
                )}
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={selectedProducts.images[selectedImage]?.url}
                alt="Main Product"
                className="w-full h-[400px] object-cover rounded-lg border border-gray-100"
              />
              {/* Discount Badge */}
              {selectedProducts.originalPrice && (
                <span className="absolute top-4 left-4 bg-rabbit-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${selectedProducts.originalPrice - selectedProducts.price}
                </span>
              )}
            </div>
          </div>

          {/* Row 3: Product Details */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Product Name & Brand */}
              <div className="mb-3">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProducts.name}</h2>
                <p className="text-sm text-gray-500 mt-1">by {selectedProducts.brand}</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-rabbit-red">
                  ${selectedProducts.price}
                </span>
                {selectedProducts.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${selectedProducts.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {selectedProducts.description}
              </p>

              {/* Material */}
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium text-gray-700">Material:</span> {selectedProducts.material}
              </p>

              {/* Colors */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Colors:</h4>
                <div className="flex gap-3 flex-wrap">
                  {selectedProducts.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        index === selectedColor 
                          ? 'border-rabbit-red ring-2 ring-rabbit-red ring-opacity-30 scale-110' 
                          : 'border-gray-300 hover:border-rabbit-red hover:scale-105'
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Sizes:</h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedProducts.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(index)}
                      className={`w-12 h-10 rounded-md border-2 font-medium text-sm transition-all ${
                        index === selectedSize
                          ? 'border-rabbit-red bg-rabbit-red text-white shadow-md scale-105'
                          : 'border-gray-300 hover:border-rabbit-red hover:bg-rabbit-red hover:text-white hover:shadow-sm'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Quantity:</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decreaseQuantity}
                    className={`w-10 h-10 rounded-md border-2 flex items-center justify-center transition-all ${
                      quantity <= 1
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-gray-300 hover:border-rabbit-red hover:bg-rabbit-red hover:text-white'
                    }`}
                    disabled={quantity <= 1}
                  >
                    <FaMinus className="text-sm" />
                  </button>
                  
                  <span className="w-12 text-center text-lg font-semibold text-gray-800">
                    {quantity}
                  </span>
                  
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-rabbit-red hover:bg-rabbit-red hover:text-white transition-all"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={addToCart}
              disabled={isAddingToCart}
              className={`w-full bg-rabbit-red hover:bg-secondary-red text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
                isAddingToCart ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails