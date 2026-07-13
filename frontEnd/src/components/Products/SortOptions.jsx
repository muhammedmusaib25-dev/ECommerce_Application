import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    searchParams.set("sort", selectedSort);
    setSearchParams(searchParams);
  }
  return (
    <div className="mb-4 flex items-center justify-end">
      <select name="sort" id="sort" onChange={handleSortChange}
       value={searchParams.get("sort") || ""} className="border border-gray-300 rounded px-2 py-1" >
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions