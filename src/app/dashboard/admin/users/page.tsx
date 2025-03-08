import AdminSidebar from "@/components/admin/AdminSidebar";
import UserTable from "@/components/admin/UserTable";
import { useAuth } from "@/lib/auth";
import { User } from "@/types/user";

const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
];

export default function UsersPage() {
  const { isAdmin, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <div>Access Denied. You do not have permission to view this page.</div>;
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <UserTable users={users} />
      </div>
    </div>
  );
}