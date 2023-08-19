import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import NotFound from "./NotFound";
import Gists from "./Gists";
import "../styles/Router.scss";

const Router = () => {
  return (
    <>
      <ul className="router">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile </Link>
        </li>
        <li>
          <Link to="/chats/nochat">Chats </Link>
        </li>
        <li>
          <Link to="/gists">Gists</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gists" element={<Gists />} />
        <Route path="/chats">
          <Route index element={<Chats />} />
          <Route path=":id" element={<Chats />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
