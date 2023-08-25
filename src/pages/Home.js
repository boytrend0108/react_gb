import {MyThemeContext} from "../App"
import { useContext } from "react"

const Home = () => {
  const context = useContext(MyThemeContext);
  const changeTheme = () => {
    context.setTheme(context.theme === "dark" ? "light" : "dark")
  }

  return ( 
  <div>Home
    <h2>{context.theme}</h2>
    <button onClick={changeTheme}>Change</button>
  </div>
  )
}

export default Home