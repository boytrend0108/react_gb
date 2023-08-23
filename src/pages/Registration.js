import React from 'react';
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebaseConfig from "../services/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const auth = getAuth(firebaseConfig);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Пользователь зарегистрирован',  {
        position: toast.POSITION.TOP_CENTER
      });
      setEmail('');
      setPassword('');
    } catch (err) {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      });
      console.log(err)
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <TextField
          placeholder="email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <TextField
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <br />
        <div>
          {error && <p>error</p>}
          <Button type="submit">Registration</Button>
        </div>

        <p>
          Aкаунт уже есть? <Link to="/login">Войти</Link>
        </p>
      </form>
      <br />
    </div>
  );
};

export default Registration;
