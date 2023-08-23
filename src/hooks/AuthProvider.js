import React from "react";
import { useState } from "react";
import firebaseConfig from "../services/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext(null);

export function AuthProvider({children}) {
  const [user, setUser] = useState();

  let sigпin = async (newUser, callback) => {
    const auth = getAuth(firebaseConfig);
    await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    callback();
  }

  let signout = async (callback) => {
    const auth = getAuth(firebaseConfig);
    await signOut(auth);
    setUser(null);
    callback(); // вызываем коллбэк если он есть
  }

  let value = {user, sigпin, signout};

  return <AuthContext.Provider value={value}> { children } </AuthContext.Provider>;
  
}

const useAuth = () => {
  return React.useContext(AuthContext);
}

export default useAuth;
