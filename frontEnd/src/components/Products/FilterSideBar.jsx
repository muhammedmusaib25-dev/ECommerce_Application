import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  // Price Range State
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Filter Options
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Denim",
    "Wool",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Levi's",
    "Zara",
    "H&M",
    "Roadster",
    "US Polo",
  ];
  const genders = ["Men", "Women"];

  // Load filters from URL on component mount
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice || 0),
      maxPrice: Number(params.maxPrice || 100),
    });

    setPriceRange([
      Number(params.minPrice || 0),
      Number(params.maxPrice || 100),
    ]);
  }, [searchParams]);

  // Handle all filter changes
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    let newFilter = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilter[name] = [...(newFilter[name] || []), value];
      } else {
        newFilter[name] = newFilter[name].filter((item) => item !== value);
      }
    } else if (type === "range") {
      // Handle range input
      newFilter.maxPrice = Number(value);
      setPriceRange([0, Number(value)]);
    } else {
      newFilter[name] = value;
    }

    setFilters(newFilter);
    
    // Update URL after state is updated
    updateUrlParams(newFilter);
  };

  // Handle color button click (since buttons don't have checked/type like inputs)
  const handleColorClick = (color) => {
    const newFilter = { ...filters };
    newFilter.color = newFilter.color === color ? "" : color;
    setFilters(newFilter);
    updateUrlParams(newFilter);
  };

  // Update the URL with current filters
  const updateUrlParams = (currentFilters) => {
    const params = new URLSearchParams();
    const filtersToUse = currentFilters || filters;

    Object.entries(filtersToUse).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (value !== "" && value !== null && value !== undefined && value !== 0) {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 cursor-pointer"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-2">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 cursor-pointer"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => handleColorClick(color)}
              className={`w-8 h-8 rounded-full border-2 transition-transform ${
                filters.color === color
                  ? "border-black scale-110 shadow-md"
                  : "border-gray-300 hover:scale-105"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              aria-label={`Select ${color} color`}
              title={color}
            />
          ))}
        </div>
        {filters.color && (
          <button
            onClick={() => handleColorClick("")}
            className="mt-2 text-sm text-red-500 hover:text-red-700"
          >
            Clear color
          </button>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 cursor-pointer"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 cursor-pointer"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 cursor-pointer"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="maxPrice"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={handleFilterChange}
          className="w-full cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Clear All Filters Button */}
      <button
        onClick={() => {
          const emptyFilters = {
            category: "",
            gender: "",
            color: "",
            size: [],
            material: [],
            brand: [],
            minPrice: 0,
            maxPrice: 100,
          };
          setFilters(emptyFilters);
          setPriceRange([0, 100]);
          setSearchParams({});
        }}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded transition"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSideBar;