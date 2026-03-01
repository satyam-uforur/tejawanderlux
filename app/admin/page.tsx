"use client";

import { useEffect, useState } from "react";
import { Users, Calendar } from "lucide-react";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/admin/dashboard");
        const data = await res.json();

        setUsers(data.users || []);
        setBookings(data.bookings || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Admin Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-10 space-y-12">
      
      <h1 className="text-4xl font-bold text-gray-800">
        Admin Dashboard
      </h1>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg opacity-80">Total Users</p>
              <h2 className="text-4xl font-bold mt-2">{users.length}</h2>
            </div>
            <Users size={50} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg opacity-80">Total Bookings</p>
              <h2 className="text-4xl font-bold mt-2">{bookings.length}</h2>
            </div>
            <Calendar size={50} />
          </div>
        </div>
      </div>

      {/* USERS SECTION */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">
          All Users
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-50 text-indigo-700">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Created</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                      {user.role || "user"}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BOOKINGS SECTION */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-600">
          All Bookings
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-green-50 text-green-700">
                <th className="p-4">User Email</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Status</th>
                <th className="p-4">Booked On</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-green-50 transition"
                >
                  <td className="p-4">{booking.email}</td>
                  <td className="p-4 font-medium">
                    {booking.destination}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
                      {booking.status || "Pending"}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}