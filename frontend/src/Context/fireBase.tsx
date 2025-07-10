import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "@/utils/fireBase";
import {
  onAuthStateChanged,
  signInWithPopup,
  type UserCredential,
  type User,
  signOut,
} from "firebase/auth";

export interface LayoutProps {
  children: React.ReactNode;
}

interface FireBaseContextType {
  signUpWithGmail: () => Promise<UserCredential>;
  user: User | null;
  loading: boolean;
  logOut:()=> Promise<void>
}

const FireBaseContext = createContext<FireBaseContextType | null>(null);

export const useFireBase = () => {
  const context = useContext(FireBaseContext);
  if (!context) {
    throw new Error("useFireBase must be used within a FireBaseProvider");
  }
  return context;
};

export const FireBaseProvider = (props: LayoutProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = ()=>{
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);



  const value: FireBaseContextType = { signUpWithGmail, user, loading,logOut };

  return (
    <FireBaseContext.Provider value={value}>
      {props.children}
    </FireBaseContext.Provider>
  );
};
