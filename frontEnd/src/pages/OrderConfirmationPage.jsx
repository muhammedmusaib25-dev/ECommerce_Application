const checkOut = {
  _id: "12323",
  createdAt: new Date(),
  checkOutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Sneakers",
      color: "White",
      size: "9",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
  paymentMethod: "PayPal",
  totalPrice: 390,
};

const OrderConfirmationPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-2">
        Thank You for Your Order!
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Your order has been placed successfully.
      </p>

      {checkOut ? (
        <div className="border rounded-lg shadow-sm p-6">
          {/* Order Info */}
          <div className="flex flex-col md:flex-row justify-between gap-6 border-b pb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkOut._id}
              </h2>

              <p className="text-gray-500 mt-2">
                Order Date:{" "}
                {new Date(checkOut.createdAt).toLocaleDateString()}
              </p>

              <p className="text-gray-500">
                Payment: {checkOut.paymentMethod}
              </p>
            </div>

            <div className="text-left md:text-right">
              <h3 className="text-lg font-semibold text-emerald-700">
                Estimated Delivery
              </h3>

              <p className="text-gray-500">3 - 5 Business Days</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mt-6 border-b pb-6">
            <h2 className="text-xl font-semibold mb-3">
              Shipping Address
            </h2>

            <p>{checkOut.shippingAddress.address}</p>
            <p>{checkOut.shippingAddress.city}</p>
            <p>{checkOut.shippingAddress.country}</p>
          </div>

          {/* Order Items */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Order Items
            </h2>

            {checkOut.checkOutItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">{item.name}</h3>

                    <p className="text-sm text-gray-500">
                      Color: {item.color}
                    </p>

                    <p className="text-sm text-gray-500">
                      Size: {item.size}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-lg">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>${checkOut.totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-lg mt-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-2xl font-bold mt-4 border-t pt-4">
              <span>Total</span>
              <span>${checkOut.totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Continue Shopping Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-red-500 text-lg">
          No order found.
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;