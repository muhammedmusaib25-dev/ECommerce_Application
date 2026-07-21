import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineShoppingBag,
  HiOutlineClipboardList,
  HiOutlineHome,
  HiOutlineLogout,
} from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Users",
      path: "users",
      icon: <HiOutlineUsers className="text-xl" />,
    },
    {
      name: "Products",
      path: "products",
      icon: <HiOutlineShoppingBag className="text-xl" />,
    },
    {
      name: "Orders",
      path: "orders",
      icon: <HiOutlineClipboardList className="text-xl" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-64
        bg-gray-900 border-r border-gray-800
        transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
          <Link
            to="/admin"
            className="text-2xl font-bold tracking-wide text-rabbit-red"
          >
            Rabbit Admin
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 h-[calc(100%-4rem)]">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200
                  ${
                    isActive
                      ? "bg-rabbit-red text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}

            <div className="border-t border-gray-800 my-4"></div>

            <NavLink
              to="/"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              <HiOutlineHome className="text-xl" />
              <span>Shop</span>
            </NavLink>
          </div>

          {/* Logout Button */}
          <div className="mt-auto">
            <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-rabbit-red hover:bg-secondary-red text-white py-3 transition">
              <HiOutlineLogout className="text-xl" />
              Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>

            <h1 className="text-2xl font-semibold text-white">
              Admin Dashboard
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-950 p-6">
          <div className="min-h-[calc(100vh-7rem)] rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;