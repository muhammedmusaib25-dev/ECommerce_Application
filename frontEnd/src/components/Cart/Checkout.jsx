import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
    Products: [{
    _id: "1",
    name: "Stylish Leather Jacket",
    price: 120,
    originalPrice: 150,
    description: "Premium leather jacket perfect for any occasion",
    brand: "Fashion Brand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Red"],
    rating: 4.5,
    reviews: 128,
    images: [
      {
        url: "https://picsum.photos/400/400?random=1",
        altText: "Stylish Leather Jacket",
      },
      {
        url: "https://picsum.photos/400/400?random=2",
        altText: "Stylish Leather Jacket Back",
      },
    ],
  },
  {
    _id: "2",
    name: "Casual Denim Jeans",
    price: 75,
    originalPrice: 95,
    description: "Comfortable denim jeans for everyday wear",
    brand: "Denim Co",
    material: "Cotton",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    rating: 4.2,
    reviews: 256,
    images: [
      {
        url: "https://picsum.photos/400/400?random=3",
        altText: "Casual Denim Jeans",
      },
    ],
  },],
  totalPrice: 195,
}
  
const CheckOut = () => {
    const navigate= useNavigate();
    const [shippingAddress, setShippingAddress]=useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        postalCode:"",
        country:"",
        phone:"",
    })
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto ,py-10 px-6">
        {/* Left Section */}
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl uppercase mb-6">Checkout</h2>
            <form action="">
                <h3 className="text-lg mb-4">Contact Details</h3>
                <div className="mb-4">
                    <label htmlFor="" className="block text-gray-700">
                    </label>
                    <input type="email" 
                        value={"user@example.com"}
                        disabled
                        className="w-full p-2 border rounded" 
                        />      
                </div>
                <h3 className="text-lg mb-4">Delivery</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="" className="block">First Name</label>
                        <input 
                        type="text" 
                        value={shippingAddress.firstName}
                        onChange={(e)=>setShippingAddress({
                            ...shippingAddress,
                            firstName:e.target.value
                        })}
                        className="w-full p-2 border rounded"
                        required
                        />
                        
                    </div>

                    <div>
                        <label htmlFor="" className="block">Last Name</label>
                        <input 
                        type="text" 
                        value={shippingAddress.lastName}
                        onChange={(e)=>setShippingAddress({
                            ...shippingAddress,
                            lastName:e.target.value
                        })}
                        className="w-full p-2 border rounded"
                        required
                        />
                        
                    </div>
                </div>
                <div className="mb-4">
                    <lable className="block text-gray-700">Address</lable>
                    <input type="text"
                    value={shippingAddress.address}
                    onChange={(e)=>
                        setShippingAddress({
                            ...shippingAddress,
                            address:e.target.value
                        })
                    }
                    className="w-full p-2 corder rounded" 
                    required
                    />
                    
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
