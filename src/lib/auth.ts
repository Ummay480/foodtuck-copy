import { useUser } from "@clerk/nextjs";
import { UserRole, hasAdminAccess } from "./roles";

export const useAuth = () => {
  const { user, isLoaded } = useUser();

  const isAdmin = hasAdminAccess(user?.publicMetadata?.role as UserRole);

  return {
    isAdmin,
    isLoaded,
    user,
  };
};