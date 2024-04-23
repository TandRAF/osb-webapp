import { Outlet} from "react-router-dom";
import {NavBar, Footer} from "./components/Componets";

export const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet />
        <Footer/>

    </>
  )
};