import {React , useState, useRef, useEffect} from "react";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const NewArrivals = () => {
  const scrollRef= useRef(null)
  const [canScrollLeft, setCanScrollLeft]=useState(false)
  const [canScrollRight, setCanScrollRight]=useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX]= useState(null)
  const [scrollLeft, setScrollLeft]=useState(null)

  const scroll=(direction)=>{
    const container= scrollRef.current;
    const scrollAmount= 300
    
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }
  
  const handleScroll=()=>{
    const container = scrollRef.current;
    if (!container) return;

    // Check if scrolled to left edge
    const isAtLeft = container.scrollLeft === 0;
    // Check if scrolled to right edge (with small tolerance for rounding errors)
    const isAtRight = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

    setCanScrollLeft(!isAtLeft);
    setCanScrollRight(!isAtRight);
  }

  function handleMouseDown(e){
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
      // Prevent default to avoid text selection during drag
      e.preventDefault()
    }

  function handleMouseMove(e){
    if(!isDragging) return
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  function handleMouseUpOrLeave(){
    setIsDragging(false)
  }
   

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    // Initial check after render
    handleScroll();

    container.addEventListener("scroll", handleScroll);

    // Also check on window resize (in case container dimensions change)
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Casual Denim Jeans",
      price: 75,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Casual Denim Jeans",
        },
      ],
    },
    {
      _id: "3",
      name: "Summer Floral Dress",
      price: 95,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Summer Floral Dress",
        },
      ],
    },
    {
      _id: "4",
      name: "Leather Sneakers",
      price: 85,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Leather Sneakers",
        },
      ],
    },
    {
      _id: "5",
      name: "Wool Sweater",
      price: 110,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Wool Sweater",
        },
      ],
    },
    {
      _id: "6",
      name: "Cotton T-Shirt Pack",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Cotton T-Shirt Pack",
        },
      ],
    },
    {
      _id: "7",
      name: "Sports Cap",
      price: 25,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Sports Cap",
        },
      ],
    },
    {
      _id: "8",
      name: "Winter Gloves",
      price: 35,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Winter Gloves",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion
        </p>
        {/* Scroll Button */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 flex space-x-2 z-10`}
        >
          <button
            className={`p-1 rounded border bg-white text-black ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            onClick={()=>scroll("left")}
            disabled={!canScrollLeft}
          >
            <FaCaretLeft className="text-2xl"/>
          </button>
          <button 
            className={`p-1 rounded border bg-white text-black ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            onClick={()=>scroll("right")}
            disabled={!canScrollRight}
          >
            <FaCaretRight className="text-2xl"/>
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
          ref={scrollRef}
          className={`container mx-auto overflow-x-scroll flex space-x-6 relative scroll-smooth ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {newArrivals.map((product)=>(
            <div key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0].url} 
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[500px] object-cover rounded-lg" 
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 opacity-50
                backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link
                  to={`/product/${product._id}`}
                  className="block"
                >
                  <h4 className="font-medium">{product.name}</h4>
                  <h4 className="mt-1">${product.price}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;