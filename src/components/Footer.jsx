import "../SCSS/SCSS-Components/Footer.scss"
import { menuItem, menuIcons } from "../assets/content"
import { Link } from "react-router-dom"
import { Facebook,Instagram,TikTok,MailIcon} from "../assets/Icons/MediaIcons"
export const Footer = () => {
  return (
   <footer>
    <div className="footer-text-block">
      <h3><b>Organizația Studenților Basarabeni</b> din Timișoara</h3>
      <p>OSB Timișoara – Organizația Studenților Basarabeni din Timișoara, o comunitate dedicată promovării intereselor și valorilor studenților basarabeni. </p>
    </div>
    <div className="footer-nav-links">
      <h3>Explore</h3>
    <ul>
        {menuItem.map((item ,Index) => {
                    return(
                       <li key={Index}>
                        <Link to={item.link} key={Index}>
                            {item.title} 
                        </Link>
                      </li>
                    )
              })}
        </ul>
    </div>
    <div className="footer-social-links">
    <h3>Contacte</h3>
      <ul>
      {menuIcons.map((item ,Index) => {
                    return(
                       <li key={Index}>
                        <a href={item.link} key={Index}>
                        <span className="icon">
                          <item.Icon/>
                        </span>
                            {item.title} 
                        </a>
                      </li>
                    )
              })}
      </ul>
    </div>
    <div className="footer-newslatter">
        <h3>Noutăți și evenimente din comunitatea noastră!</h3>
        <p>
        Explorează evenimentele noastre, proiectele noastre și oportunitățile  noastre de implicare. Haideți să creăm împreună un loc plin de energie pozitivă și oportunități inspiraționale!
        </p>
        <form className="icon-input-button-footer">
          <span className="icon">
              <MailIcon/>
          </span>
          <input type="text" placeholder="Your mail..."/>
          <button>Urmărește-ne</button>
        </form>
    </div>
   </footer>
  )
}
