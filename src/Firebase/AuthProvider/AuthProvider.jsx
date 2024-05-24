import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import app from "./firebaseConfig";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //creat email pass sing in

  //singIN

  //goggle sing is
  const googleSing = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //user aute state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  //sing Out
  const logOut = () => {
    setLoading(true);

    signOut(auth);
  };
  //update profile

  const authInfo = {
    googleSing,
    user,
    logOut,
    loading,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
