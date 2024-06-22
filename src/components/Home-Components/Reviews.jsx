import "../../SCSS/SCSS-Components/SCSS-home-components/Reviews.scss"
import { Stars,Quotes } from "../../assets/Icons/Icons"
import { reviewItems } from "../../assets/content"
import { useState,useEffect,useRef } from "react"

export const Reviews = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const card = useRef({});
    const showCards = (items) => {
        return(
            <>
                {items.map((item,index)=>{
                return(
                    <div
                    ref={card}
                     key={index} className="card">
                        <Quotes/>
                        <p>{item.text}</p>
                        <div className="card-name-status">
                            <img key={index} src={item.src} alt={item.name} />
                            <div className="name-status">
                                <span>{item.name}</span>
                                <span>{item.status}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
    useEffect(()=>{
        setWidth(window.innerWidth);
    });

  return (
    <>
        <section className="reviews-info-blocks">
            <div className="reviews-info">
                <Stars/>
                <h2>Ce spun <b>membrii</b> noștri ?</h2>
                <p>Părerile și experiențele membrilor noștri sunt fundamentale pentru noi.  Iată ce au de spus despre implicarea lor în comunitatea noastră.  Feedback-ul lor ne inspiră și ne motivează să continuăm să creștem și să  dezvoltăm proiectele noastre, pentru a aduce beneficii reale membrilor  noștri și comunității în ansamblu.</p>
            </div>
            {(width > 768) ? <>{showCards(reviewItems)}</>:<> 
            <div className="card-box">
                <div className="box">
                    {showCards(reviewItems)}
                </div>
            </div>
            </> }
        </section>
    </>
  )
}