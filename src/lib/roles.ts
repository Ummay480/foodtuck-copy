export enum UserRole {
    ADMIN = "admin",
    USER = "user",
  }
  
  export const hasAdminAccess = (role: UserRole): boolean => {
    return role === UserRole.ADMIN;
  };