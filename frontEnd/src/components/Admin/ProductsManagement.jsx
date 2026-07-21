import { Link } from "react-router-dom";

const ProductsManagement = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 4999,
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 29999,
    },
    {
      id: 3,
      name: "Sony Headphones",
      price: 8999,
    },
    {
      id: 4,
      name: "Samsung Galaxy S25",
      price: 79999,
    },
  ];

  const handleDelete = (id) => {
    alert(`Delete Product ${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-slate-400 mt-1">
              Manage your products
            </p>
          </div>

          <Link
            to="/admin/products/new"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
          >
            + Add Product
          </Link>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr className="text-slate-300">

                  <th className="px-6 py-4 text-left">
                    Product ID
                  </th>

                  <th className="px-6 py-4 text-left">
                    Product Name
                  </th>

                  <th className="px-6 py-4 text-left">
                    Price
                  </th>

                  <th className="px-6 py-4 text-center">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {products.map((product) => (

                  <tr
                    key={product.id}
                    className="border-t border-slate-800 hover:bg-slate-800 transition"
                  >

                    <td className="px-6 py-5">
                      #{product.id}
                    </td>

                    <td className="px-6 py-5">

                      <Link
                        to={`/product/${product.id}`}
                        className="font-medium text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        {product.name}
                      </Link>

                    </td>

                    <td className="px-6 py-5">
                      ₹{product.price.toLocaleString()}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-2">

                        <Link
                          to={`edit/${product.id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm"
                        >
                          Delete
                        </button>

                      </div>

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

export default ProductsManagement;