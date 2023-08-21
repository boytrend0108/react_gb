import React from "react";
import { useState } from "react";
import firebase from "../services/firebaseConfig";
import {getAuth, singinWithEmailAndPassword, singOut, onAuthStateChanged} from "firebase/auth"

const AuthContext = React.createContext(null);

export function AuthProvider({children}){
  const [user, setUser] = useState();

  let singin = async (newUser, callback) => {
    const auth = getAuth(firebase);
    await singinWithEmailAndPassword(auth, newUser.email, newUser.password);
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    callback();
  }

  let singout = async (callback) => {
    const auth = getAuth(firebase);
    await singOut(auth);
    setUser(null);
    callback(); // вызываем коллбэк если он есть
  }

  let value = {user, singin, singout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return React.useContext(AuthContext);
}

export default useAuth;
