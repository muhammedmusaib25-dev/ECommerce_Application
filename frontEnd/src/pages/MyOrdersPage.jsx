import { Link } from "react-router-dom";

const orders = [
  {
    _id: "ORD1001",
    createdAt: new Date("2025-06-15"),
    totalPrice: 195,
    isPaid: true,
    isDelivered: false,
    image: "https://picsum.photos/120?random=1",
  },
  {
    _id: "ORD1002",
    createdAt: new Date("2025-06-10"),
    totalPrice: 320,
    isPaid: true,
    isDelivered: true,
    image: "https://picsum.photos/120?random=2",
  },
  {
    _id: "ORD1003",
    createdAt: new Date("2025-06-05"),
    totalPrice: 99,
    isPaid: false,
    isDelivered: false,
    image: "https://picsum.photos/120?random=3",
  },
];

const MyOrders = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-10 text-center">
          <p className="text-gray-500 text-lg">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-6"
            >
              {/* Left */}
              <div className="flex items-center gap-5">
                <img
                  src={order.image}
                  alt="Order"
                  className="w-24 h-24 rounded-lg object-cover"
                />

                <div>
                  <h2 className="text-lg font-semibold">
                    Order #{order._id}
                  </h2>

                  <p className="text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                  <p className="font-medium mt-2">
                    Total: ${order.totalPrice}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    order.isPaid
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    order.isDelivered
                      ? "bg-green-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {order.isDelivered
                    ? "Delivered"
                    : "Processing"}
                </span>
              </div>

              {/* Button */}
              <Link
                to={`/order/${order._id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;