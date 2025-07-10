import { useFireBase } from "@/Context/fireBase";

export function SignIn() {
  const fireBase = useFireBase();

  return (
    <div>
      <button
        onClick={() => {
          fireBase
            .signUpWithGmail()
            .then((res) => {
              console.log("Login success", res.user); // ✅ check if this prints
            })
            .catch((err) => {
              console.error("Login failed", err);
            });
        }}
      >
        sign in{" "}
      </button>
    </div>
  );
}
