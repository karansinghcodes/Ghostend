import { useFireBase } from "@/Context/fireBase";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const fireBase = useFireBase();

  return (
    <div>
      <button
        onClick={async () => {
          await fireBase.logOut();
          navigate("/sign-in");
        }}
      >
        log out
      </button>
    </div>
  );
}
