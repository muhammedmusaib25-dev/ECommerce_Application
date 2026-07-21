import { useState } from "react";
import { Link } from "react-router-dom";

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD-1001",
      customer: "John Doe",
      date: "21 Jul 2026",
      total: 4999,
      status: "Delivered",
    },
    {
      id: "ORD-1002",
      customer: "Sarah Smith",
      date: "20 Jul 2026",
      total: 2499,
      status: "Pending",
    },
    {
      id: "ORD-1003",
      customer: "Ahmed Khan",
      date: "19 Jul 2026",
      total: 7999,
      status: "Cancelled",
    },
    {
      id: "ORD-1004",
      customer: "Ali Hasan",
      date: "18 Jul 2026",
      total: 1599,
      status: "Processing",
    },
    {
      id: "ORD-1005",
      customer: "David Wilson",
      date: "17 Jul 2026",
      total: 999,
      status: "Shipped",
    },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";

      case "Processing":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";

      case "Shipped":
        return "bg-purple-500/20 text-purple-400 border border-purple-500/30";

      case "Delivered":
        return "bg-green-500/20 text-green-400 border border-green-500/30";

      case "Cancelled":
        return "bg-red-500/20 text-red-400 border border-red-500/30";

      default:
        return "bg-gray-700 text-gray-300 border border-gray-600";
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: newStatus }
          : order
      )
    );

    console.log("Update Order:", id, newStatus);

    // PUT API HERE
  };

  return (
    <div className="text-white max-w-7xl mx-auto">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Orders Management
          </h1>

          <p className="text-gray-400 mt-1">
            Manage customer orders
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border border-gray-800">

        <table className="min-w-full">

          <thead className="bg-gray-800">

            <tr className="text-left text-gray-300">

              <th className="px-6 py-4">Order ID</th>

              <th className="px-6 py-4">Customer</th>

              <th className="px-6 py-4">Date</th>

              <th className="px-6 py-4">Total</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-t border-gray-800 hover:bg-gray-800/40 transition"
              >

                <td className="px-6 py-4 font-semibold">
                  {order.id}
                </td>

                <td className="px-6 py-4">
                  {order.customer}
                </td>

                <td className="px-6 py-4 text-gray-400">
                  {order.date}
                </td>

                <td className="px-6 py-4">
                  ₹{order.total}
                </td>

                {/* Status Dropdown */}

                <td className="px-6 py-4">

                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(
                        order.id,
                        e.target.value
                      )
                    }
                    className={`rounded-lg px-3 py-2 outline-none text-sm font-medium ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </td>

                {/* Actions */}

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-2">

                    <Link
                      to={`/admin/orders/${order.id}`}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition"
                    >
                      View
                    </Link>

                    <button
                      className="bg-rabbit-red hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition"
                    >
                      Save
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default OrdersManagement;