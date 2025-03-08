import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold">FoodTuck</h2>
      <nav className="mt-6 space-y-2">
        <Link href="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</Link>
        <Link href="/dashboard/orders" className="block p-2 hover:bg-gray-700">Orders</Link>
      </nav>
    </div>
  );
}
