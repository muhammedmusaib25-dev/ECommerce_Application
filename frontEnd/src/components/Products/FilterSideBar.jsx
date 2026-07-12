import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams] = useSearchParams();

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

  // Categories
  const categories = ["Top Wear", "Bottom Wear"];

  // Colors
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

  // Sizes
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Materials
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

  // Dummy Brands
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

  // Genders
  const genders = ["Men", "Women"];

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
    // console.log({ name, value, checked, type });
    
    let newFilter= {...filters};

    if(type==="checkbox"){
      if(checked){
        newFilter[name]=[...(newFilter[name] || []),value]
      }
      else{
        newFilter[name]=newFilter[name].filter((item)=>item!==value)
      }
    }else{
      newFilter[name]=value
    }

    setFilters(newFilter);

    console.log(newFilter)
   
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Category
        </label>

        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Gender
        </label>

        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-2">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4"
            />
            <span>{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Colors
        </label>

        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              value={color}
              name="color"
              onClick={(e) => handleFilterChange(e)}
              className={`w-8 h-8 rounded-full border-2 transition ${
                filters.color === color
                  ? "border-black scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Size
        </label>

        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="size"
              value={size}
              // checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4"
            />
            <span>{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Material
        </label>

        {materials.map((material) => (
          <div key={material} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="material"
              value={material}
              // checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4"
            />
            <span>{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Brand
        </label>

        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              // checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4"
            />
            <span>{brand}</span>
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
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={handleFilterChange}
          className="w-full"
        />

        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;