import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
  Products: [
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
          altText: "Stylish Leather Jacket",
        },
        {
          url: "https://picsum.photos/400/400?random=2",
          altText: "Stylish Leather Jacket Back",
        },
      ],
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
          altText: "Casual Denim Jeans",
        },
      ],
    },
  ],
  totalPrice: 195,
};

const CheckOut = () => {
  const navigate = useNavigate();

  const [checkOutId, setCheckOutId] = useState(null);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle submit");
    setCheckOutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment success", details);
    navigate("/order/confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg mb-4">Contact Details</h3>

          <div className="mb-4">
            <input
              type="email"
              value="user@example.com"
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {!checkOutId ? (
              <button
                type="submit"
                className="w-full bg-red-600 py-3 text-white rounded hover:bg-red-700"
              >
                Continue to Payment
              </button>
            ) : (
              <>
                <h3 className="text-lg mb-4">Pay with PayPal</h3>

                <PayPalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed. Try again")}
                />
              </>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="border-t py-4 mb-4">
          {cart.Products.map((product) => (
            <div
              key={product._id}
              className="flex items-start justify-between py-4 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.images?.[0]?.url}
                  alt={product.images?.[0]?.altText || product.name}
                  className="w-20 h-24 object-cover rounded mr-4"
                />

                <div>
                  <h3 className="font-medium">{product.name}</h3>

                  <p className="text-sm text-gray-500">
                    Size: {product.sizes?.[0]}
                  </p>

                  <p className="text-sm text-gray-500">
                    Color: {product.colors?.[0]}
                  </p>
                </div>
              </div>

              <p className="font-semibold text-lg">
                ${product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-lg mb-3">
          <span>Subtotal</span>
          <span>${cart.totalPrice.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-lg mb-3">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between text-xl font-bold border-t pt-4">
          <span>Total</span>
          <span>${cart.totalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;