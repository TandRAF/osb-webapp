import { Link } from "react-router-dom"
export const NavBar = () => {
  return (
    <nav>
        <span className="logo"></span>
        <ul>
            <li><Link to="/">Acasă</Link></li>
            <li><Link to="evenimente">Evenimente</Link></li>
            <li><Link to="despre-noi">Despre Noi</Link></li>
            <li><Link to="contacte">Contacte</Link></li>
        </ul>
    </nav>
  )
}
