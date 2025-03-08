"use client"
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link href="/dashboard/admin/users" className="hover:text-gray-400">
            Manage Users
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/dashboard/admin/settings" className="hover:text-gray-400">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}