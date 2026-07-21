import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy Data (Replace with API)
  const [product, setProduct] = useState({
    name: "Nike Air Max 270",
    description: "Premium lightweight running shoes.",
    price: 4999,
    countInStock: 20,
    sku: "NK-270-001",
    category: "Shoes",
    brand: "Nike",
    material: "Mesh",
    gender: "Men",
    sizes: ["7", "8", "9", "10"],
    colors: ["Black", "White"],
    collections: ["Summer 2025"],
    images: [
      { name: "nike-front.jpg" },
      { name: "nike-side.jpg" },
    ],
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange = (field, value) => {
    setProduct({
      ...product,
      [field]: value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
    });
  };

  const handleImages = (e) => {
    setProduct({
      ...product,
      images: [...e.target.files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product ID:", id);
    console.log(product);

    // PUT API HERE

    navigate("/admin/products");
  };

  return (
    <div className="max-w-6xl mx-auto text-white">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Edit Product
          </h1>

          <p className="text-gray-400 mt-1">
            Product ID : {id}
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/products")}
          className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg transition"
        >
          ← Back
        </button>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-800 rounded-xl p-6 grid md:grid-cols-2 gap-5"
      >

        {/* Name */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-gray-400">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Description */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-gray-400">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 resize-none"
          />

        </div>

        {/* Price */}

        <div>

          <label className="block mb-2 text-gray-400">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Stock */}

        <div>

          <label className="block mb-2 text-gray-400">
            Count In Stock
          </label>

          <input
            type="number"
            name="countInStock"
            value={product.countInStock}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* SKU */}

        <div>

          <label className="block mb-2 text-gray-400">
            SKU
          </label>

          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Brand */}

        <div>

          <label className="block mb-2 text-gray-400">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Category */}

        <div>

          <label className="block mb-2 text-gray-400">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Material */}

        <div>

          <label className="block mb-2 text-gray-400">
            Material
          </label>

          <input
            type="text"
            name="material"
            value={product.material}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Gender */}

        <div>

          <label className="block mb-2 text-gray-400">
            Gender
          </label>

          <select
            name="gender"
            value={product.gender}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          >
            <option>Men</option>
            <option>Women</option>
            <option>Unisex</option>
            <option>Kids</option>
          </select>

        </div>

        {/* Sizes */}

        <div>

          <label className="block mb-2 text-gray-400">
            Sizes
          </label>

          <input
            type="text"
            value={product.sizes.join(", ")}
            onChange={(e) =>
              handleArrayChange("sizes", e.target.value)
            }
            placeholder="7,8,9,10"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Colors */}

        <div>

          <label className="block mb-2 text-gray-400">
            Colors
          </label>

          <input
            type="text"
            value={product.colors.join(", ")}
            onChange={(e) =>
              handleArrayChange("colors", e.target.value)
            }
            placeholder="Black, White"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Collections */}

        <div>

          <label className="block mb-2 text-gray-400">
            Collections
          </label>

          <input
            type="text"
            value={product.collections.join(", ")}
            onChange={(e) =>
              handleArrayChange("collections", e.target.value)
            }
            placeholder="Summer 2025"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

        </div>

        {/* Images */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-gray-400">
            Product Images
          </label>

          <input
            type="file"
            multiple
            onChange={handleImages}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
          />

          <div className="mt-4 space-y-2">

            {product.images.length > 0 &&
              product.images.map((img, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300"
                >
                  📷 {img.name}
                </div>
              ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="md:col-span-2 flex justify-end gap-4 mt-4">

          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg transition"
          >
            Update Product
          </button>

        </div>

      </form>

    </div>
  );
};

export default EditProduct;