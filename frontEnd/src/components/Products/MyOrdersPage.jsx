import React from 'react'
import { Link } from 'react-router-dom'

// Dummy orders data for demonstration
const dummyOrders = [
  {
    _id: "ORD001",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-20",
    status: "Delivered",
    totalAmount: 245.99,
    items: [
      {
        _id: "1",
        name: "Stylish Leather Jacket",
        price: 120,
        quantity: 1,
        image: "https://picsum.photos/400/400?random=1"
      },
      {
        _id: "2",
        name: "Casual Denim Jeans",
        price: 75,
        quantity: 1,
        image: "https://picsum.photos/400/400?random=3"
      }
    ]
  },
  {
    _id: "ORD002",
    orderDate: "2024-01-20",
    deliveryDate: "2024-01-25",
    status: "Shipped",
    totalAmount: 95.00,
    items: [
      {
        _id: "3",
        name: "Summer Floral Dress",
        price: 95,
        quantity: 1,
        image: "https://picsum.photos/400/400?random=4"
      }
    ]
  },
  {
    _id: "ORD003",
    orderDate: "2024-01-22",
    deliveryDate: "2024-01-28",
    status: "Processing",
    totalAmount: 185.00,
    items: [
      {
        _id: "4",
        name: "Leather Sneakers",
        price: 85,
        quantity: 1,
        image: "https://picsum.photos/400/400?random=5"
      },
      {
        _id: "5",
        name: "Wool Sweater",
        price: 100,
        quantity: 1,
        image: "https://picsum.photos/400/400?random=6"
      }
    ]
  }
]

// Status badge component
const StatusBadge = ({ status }) => {
  const statusStyles = {
    'Delivered': 'bg-green-100 text-green-800',
    'Shipped': 'bg-blue-100 text-blue-800',
    'Processing': 'bg-yellow-100 text-yellow-800',
    'Cancelled': 'bg-red-100 text-red-800'
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  )
}

const MyOrdersPage = () => {
  // If no orders, show empty state
  if (!dummyOrders || dummyOrders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto p-4 md:p-6 mt-2">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">My Orders</h1>
            <p className="text-gray-500 text-lg mb-6">You haven't placed any orders yet</p>
            <Link 
              to="/"
              className="inline-block bg-rabbit-red hover:bg-secondary-red text-white font-medium py-2 px-6 rounded transition-colors duration-200"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6 mt-2">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
          <div className="h-0.5 w-12 bg-rabbit-red mt-2"></div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dummyOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors duration-200">
                    {/* Order ID */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{order._id}</p>
                        <p className="text-xs text-gray-500">Delivery: {order.deliveryDate}</p>
                      </div>
                    </td>

                    {/* Order Date */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-700">{order.orderDate}</p>
                    </td>

                    {/* Items */}
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-2">
                        {order.items.map((item) => (
                          <div key={item._id} className="flex items-center gap-3">
                            <div className="w-10 h-10 flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div className="min-w-0">
                              <Link 
                                to={`/product/${item._id}`}
                                className="text-sm text-gray-800 hover:text-rabbit-red transition-colors line-clamp-1"
                              >
                                {item.name}
                              </Link>
                              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Total Amount */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <p className="text-sm font-bold text-rabbit-red">${order.totalAmount.toFixed(2)}</p>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <StatusBadge status={order.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-2">
                        <button className="text-sm bg-rabbit-red hover:bg-secondary-red text-white px-3 py-1.5 rounded transition-colors duration-200">
                          View
                        </button>
                        {order.status === 'Delivered' && (
                          <button className="text-sm border-2 border-rabbit-red text-rabbit-red hover:bg-rabbit-red hover:text-white px-3 py-1.5 rounded transition-colors duration-200">
                            Review
                          </button>
                        )}
                        {order.status === 'Processing' && (
                          <button className="text-sm border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded transition-colors duration-200">
                            Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Continue Shopping Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/"
            className="inline-flex items-center text-rabbit-red hover:text-secondary-red font-medium transition-colors duration-200"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyOrdersPage