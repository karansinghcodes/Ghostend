import { Outlet, Navigate } from "react-router-dom";

import { useFireBase } from "@/Context/fireBase";

export const ProtectedRoutes = () => {
  const fireBase = useFireBase();

  if (fireBase.loading) return <div>Loading...</div>;

  return fireBase.user ? <Outlet /> : <Navigate to="/sign-in" />; // Redirect to login if not authenticated
};
