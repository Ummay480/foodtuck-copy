import AdminSidebar from "@/components/admin/AdminSidebar";
import { useAuth } from "@/lib/auth";

export default function SettingsPage() {
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
        <h1 className="text-2xl font-bold">Admin Settings</h1>
        <p>Configure admin settings here.</p>
      </div>
    </div>
  );
}