import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/AuthProvider' 
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useAuth(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let from  = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword  = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');

    try {
      await auth.sigпin({email, password}, () => {
        setTimeout(() =>  navigate(from, { replace: true }), 2000);
      })
    } catch (err) {
      toast.error("Ошибка!!!");
      setError('');
      console.log(err);
    }
  };


  return (
  <div>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <br/>
      <div>
        <TextField 
          required
          id="outlined-required"
          label="Email"
          placeholder="Email"
          onChange={handleEmail}
        />
        <br/>
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={handlePassword}
          required
        />
         <br/>
         <br/>
         {error && <p>{error}</p>}
         <br/>
         <Button type='submit'>Login</Button>
      </div>

    </form>
  </div>);
};

export default Login;