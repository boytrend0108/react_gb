import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth  from "../hooks/AuthProvider";

 
const RequireAuth = () => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    // если пользователя нет оправить на страницу логин. после логина отравить на страницу location
    return <Navigate to='/login' state={{from:location}} />
  }

  return <Outlet />; // Outlet то что <RequireAuth>..внутри компонента..</RequireAuth> 
}

export default RequireAuth;