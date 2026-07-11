import React from "react";
import MyOrdersPage from "../components/Products/MyOrdersPage"

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6 mt-2 rounded-md shadow-lg bg-gray-50">
        <div className="flex flex-col md:flex-row gap-6">
          {/* left-section  */}
          <div className="w-full md:w-64 flex-shrink-0 shadow-md rounded-lg p-6 bg-white h-fit">
            <h1 className="text-xl md:text-xl font-bold md-4 text-rabbit-red">
              John Doe
            </h1>
            <p className="text-md text-gray-600 mb-4">John@Example.com</p>
            <button className="w-full text-white bg-rabbit-red py-2 rounded shadow-md hover:bg-secondary-red text-md">
              Logout
            </button>
          </div>

          {/* Right section - Orders Table */}
          <div className="flex-1 bg-white rounded-lg shadow-md">
            <MyOrdersPage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
