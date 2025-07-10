import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/auth/SignIn";
import { ProtectedRoutes } from "./utils/protectedRoutes";
import { Home } from "./pages/(app)/Home";
import { PublicRoutes } from "./utils/PublicRoutes";

function App() {
  console.log("app is rendering ");
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
