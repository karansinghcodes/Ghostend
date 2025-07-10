import { Outlet, Navigate } from "react-router-dom";

import { useFireBase } from "@/Context/fireBase";

export const PublicRoutes = () => {
  const fireBase = useFireBase();

  if (fireBase.loading) return <div>Loading...</div>;

  return fireBase.user ? <Navigate to="/" />: <Outlet /> 
};
