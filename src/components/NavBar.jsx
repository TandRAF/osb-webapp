import { NavLink } from "react-router-dom";
import { Logo } from "../assets/Icons/Logo";
import { Close } from "../assets/Icons/Icons";
import "../SCSS/SCSS-Components/NavBar.scss";
import { menuItem } from "../assets/content";
import { useState } from "react";

export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <header>
      <span className="logo-container">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </span>
      <div className={`nav-burger ${navState ? "active" : ""}`} onClick={() => setNavState(!navState)}>
        <span></span><span></span><span></span>
      </div>
      <nav className={navState ? "active" : ""}>
        <div>
          <Logo/>
          <div onClick={()=>{setNavState(!navState)}}>
            <Close/>
          </div>
        </div>
        {menuItem.map((item, Index) => (
          <NavLink to={item.link} key={Index}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};