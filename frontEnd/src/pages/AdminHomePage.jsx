import { Link } from "react-router-dom";

const recentOrders = [
  {
    id: "#ORD1001",
    user: "John Doe",
    total: "$120",
    status: "Delivered",
  },
  {
    id: "#ORD1002",
    user: "Sarah Khan",
    total: "$85",
    status: "Pending",
  },
  {
    id: "#ORD1003",
    user: "Ali Ahmed",
    total: "$230",
    status: "Shipped",
  },
  {
    id: "#ORD1004",
    user: "David Smith",
    total: "$65",
    status: "Cancelled",
  },
];

const AdminHomePage = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-600";
      case "Pending":
        return "bg-yellow-500";
      case "Shipped":
        return "bg-blue-600";
      case "Cancelled":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white p-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-500">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Welcome back! Here's an overview of your store.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Revenue */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition duration-300 shadow-lg">
            <h2 className="text-gray-400 text-sm uppercase">
              Revenue
            </h2>

            <p className="text-3xl font-bold mt-3 text-red-500">
              $10,000
            </p>

            <p className="text-green-400 text-sm mt-2">
              +15% this month
            </p>
          </div>

          {/* Orders */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition duration-300 shadow-lg">
            <h2 className="text-gray-400 text-sm uppercase">
              Orders
            </h2>

            <p className="text-3xl font-bold mt-3">
              200
            </p>

            <Link
              to="/admin/orders"
              className="inline-block mt-4 text-red-500 hover:text-red-400"
            >
              Manage Orders →
            </Link>
          </div>

          {/* Products */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition duration-300 shadow-lg">
            <h2 className="text-gray-400 text-sm uppercase">
              Products
            </h2>

            <p className="text-3xl font-bold mt-3">
              150
            </p>

            <Link
              to="/admin/products"
              className="inline-block mt-4 text-red-500 hover:text-red-400"
            >
              Manage Products →
            </Link>
          </div>

          {/* Users */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition duration-300 shadow-lg">
            <h2 className="text-gray-400 text-sm uppercase">
              Users
            </h2>

            <p className="text-3xl font-bold mt-3">
              520
            </p>

            <p className="text-gray-400 mt-4">
              Registered Customers
            </p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-10 bg-gray-900 rounded-xl shadow-lg border border-gray-800">

          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold">
              Recent Orders
            </h2>

            <Link
              to="/admin/orders"
              className="text-red-500 hover:text-red-400"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-800 text-gray-300 uppercase text-sm">

                <tr>
                  <th className="py-4 px-6 text-left">Order ID</th>
                  <th className="py-4 px-6 text-left">Customer</th>
                  <th className="py-4 px-6 text-left">Amount</th>
                  <th className="py-4 px-6 text-left">Status</th>
                </tr>

              </thead>

              <tbody>

                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-800 hover:bg-gray-800 transition"
                  >
                    <td className="py-4 px-6 font-semibold">
                      {order.id}
                    </td>

                    <td className="py-4 px-6">
                      {order.user}
                    </td>

                    <td className="py-4 px-6">
                      {order.total}
                    </td>

                    <td className="py-4 px-6">

                      <span
                        className={`${getStatusColor(
                          order.status
                        )} px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {order.status}
                      </span>

                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;