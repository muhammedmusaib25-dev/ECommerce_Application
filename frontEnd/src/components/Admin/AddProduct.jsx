import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    brand: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    // POST API

    navigate("/admin/products");
  };

  return (
    <div className="text-white max-w-6xl mx-auto">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Add Product
          </h1>

          <p className="text-gray-400 mt-1">
            Create a new product
          </p>

        </div>

        <button
          onClick={() => navigate("/admin/products")}
          className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg"
        >
          Back
        </button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Image */}

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">

          {product.image ? (
            <img
              src={product.image}
              alt="Preview"
              className="w-full h-72 rounded-lg object-cover"
            />
          ) : (
            <div className="w-full h-72 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
              Image Preview
            </div>
          )}

          <input
            type="file"
            onChange={handleImage}
            className="mt-5 w-full"
          />

        </div>

        {/* Form */}

        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <div className="md:col-span-2">

              <label className="block mb-2 text-gray-400">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Nike Air Max"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

            </div>

            <div>

              <label className="block mb-2 text-gray-400">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="4999"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

            </div>

            <div>

              <label className="block mb-2 text-gray-400">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="50"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

            </div>

            <div>

              <label className="block mb-2 text-gray-400">
                Brand
              </label>

              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                placeholder="Nike"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

            </div>

            <div>

              <label className="block mb-2 text-gray-400">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                placeholder="Shoes"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

            </div>

            <div className="md:col-span-2">

              <label className="block mb-2 text-gray-400">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Write product description..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 resize-none outline-none focus:border-red-500"
              />

            </div>

            <div className="md:col-span-2 flex justify-end gap-3">

              <button
                type="button"
                onClick={() => navigate("/admin/products")}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg"
              >
                Add Product
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddProduct;