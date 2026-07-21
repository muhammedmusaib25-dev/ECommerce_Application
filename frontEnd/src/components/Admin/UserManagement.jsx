import { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Sarah Khan",
      email: "sarah@gmail.com",
      role: "Customer",
    },
    {
      id: 3,
      name: "Ali Ahmed",
      email: "ali@gmail.com",
      role: "Customer",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Customer",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) return;

    setUsers([
      ...users,
      {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      password: "",
      role: "Customer",
    });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-slate-400 mt-1">
            Manage all registered users.
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-5">Add New User</h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-slate-800 rounded-xl p-3 border border-slate-700 outline-none focus:border-red-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-slate-800 rounded-xl p-3 border border-slate-700 outline-none focus:border-red-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-slate-800 rounded-xl p-3 border border-slate-700 outline-none focus:border-red-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="bg-slate-800 rounded-xl p-3 border border-slate-700 outline-none focus:border-red-500"
            >
              <option>Customer</option>
              <option>Admin</option>
            </select>

            <button
              className="md:col-span-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
            >
              Add User
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex justify-between items-center p-5 border-b border-slate-800">
            <h2 className="font-semibold text-lg">Users</h2>

            <span className="text-slate-400 text-sm">
              {users.length} Users
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-800">
                <tr className="text-slate-300 text-sm">
                  <th className="px-6 py-4 text-left">User</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Role</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-slate-800 hover:bg-slate-800 transition"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center font-bold">
                          {user.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-slate-400">
                            ID #{user.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-300">
                      {user.email}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.role === "Admin"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-center gap-2">
                        <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm">
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-8 text-slate-400"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserManagement;