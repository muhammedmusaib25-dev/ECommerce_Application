import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();

  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Mock API response
    const mockOrderDetails = {
      _id: id || "ORD123456",
      createdAt: new Date(),
      isDelivered: false,
      deliveredAt: null,
      isPaid: true,
      paidAt: new Date(),
      paymentMethod: "PayPal",
      shippingMethod: "Standard Shipping",
      shippingAddress: {
        firstName: "John",
        lastName: "Doe",
        address: "123 Fashion Street",
        city: "New York",
        postalCode: "10001",
        country: "USA",
        phone: "+1 9876543210",
      },
      orderItems: [
        {
          _id: "1",
          name: "Leather Jacket",
          image: "https://picsum.photos/150?random=1",
          color: "Black",
          size: "M",
          quantity: 1,
          price: 150,
        },
        {
          _id: "2",
          name: "Denim Jeans",
          image: "https://picsum.photos/150?random=2",
          color: "Blue",
          size: "32",
          quantity: 2,
          price: 75,
        },
      ],
      itemsPrice: 300,
      shippingPrice: 0,
      totalPrice: 300,
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);

  if (!orderDetails) {
    return (
      <div className="text-center py-20 text-xl">
        Loading Order...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          to="/my-orders"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          ← Back to My Orders
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">
        Order Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Order Information
            </h2>

            <p className="mb-2">
              <span className="font-semibold">Order ID:</span>{" "}
              {orderDetails._id}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Order Date:</span>{" "}
              {new Date(orderDetails.createdAt).toLocaleDateString()}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Payment Method:</span>{" "}
              {orderDetails.paymentMethod}
            </p>

            <p>
              <span className="font-semibold">Shipping Method:</span>{" "}
              {orderDetails.shippingMethod}
            </p>
          </div>

          {/* Shipping Address */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Shipping Address
            </h2>

            <p>
              {orderDetails.shippingAddress.firstName}{" "}
              {orderDetails.shippingAddress.lastName}
            </p>

            <p>{orderDetails.shippingAddress.address}</p>

            <p>
              {orderDetails.shippingAddress.city},{" "}
              {orderDetails.shippingAddress.postalCode}
            </p>

            <p>{orderDetails.shippingAddress.country}</p>

            <p>{orderDetails.shippingAddress.phone}</p>
          </div>

          {/* Ordered Items */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Ordered Items
            </h2>

            {orderDetails.orderItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b py-4 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
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
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>${orderDetails.itemsPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>
              {orderDetails.shippingPrice === 0
                ? "Free"
                : `$${orderDetails.shippingPrice.toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>${orderDetails.totalPrice.toFixed(2)}</span>
          </div>

          {/* Payment Status */}
          <div className="mt-8">
            <div
              className={`p-3 rounded-lg text-center text-white mb-4 ${
                orderDetails.isPaid
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {orderDetails.isPaid
                ? `Paid on ${new Date(
                    orderDetails.paidAt
                  ).toLocaleDateString()}`
                : "Payment Pending"}
            </div>

            {/* Delivery Status */}
            <div
              className={`p-3 rounded-lg text-center text-white ${
                orderDetails.isDelivered
                  ? "bg-green-600"
                  : "bg-yellow-500"
              }`}
            >
              {orderDetails.isDelivered
                ? `Delivered on ${new Date(
                    orderDetails.deliveredAt
                  ).toLocaleDateString()}`
                : "Not Delivered Yet"}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link
              to="/my-orders"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Back to My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;