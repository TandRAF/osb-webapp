import { NavLink } from "react-router-dom"
import { Logo } from "../assets/Icons/Logo"
import "../SCSS/SCSS-Components/NavBar.scss"
import { menuItem } from "../assets/content"
export const NavBar = () => {
  return (
    <nav>
        <span className="logo-container">
        <NavLink to="/">
          <Logo/>
        </NavLink>
        </span>
        <ul>
        {menuItem.map((item ,Index) => {
                    return(
                       <li key={Index}>
                        <NavLink to={item.link} key={Index}>
                            {item.title} 
                        </NavLink>
                      </li>
                    )
              })}
        </ul>
    </nav>
  )
}
