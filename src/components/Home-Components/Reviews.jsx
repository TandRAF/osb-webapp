import "../../SCSS/SCSS-Components/SCSS-home-components/Reviews.scss"
import { Stars,Quotes } from "../../assets/Icons/Icons"
import { reviewItems } from "../../assets/content"
import { useState,useEffect,useRef } from "react"

var cardIndex = 0;
export const Reviews = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [cardMove, setCardMove] = useState(0);

    const card = useRef({});
    const startTouchEvent = (e) =>{
        [...e.changedTouches].forEach(touch => {
            setTouchStart(touch.pageX);
        });
    }
    const moveTouchEvent = (e) =>{
        [...e.changedTouches].forEach(touch => {
            // console.log(touch.pageX);
        });
    }
    const endtTouchEvent = (e) =>{
        [...e.changedTouches].forEach(touch => {
            setTouchEnd(touch.pageX);
        });
        console.log("Val");
        console.log(touchStart - touchEnd)
        if((touchStart - touchEnd > 0) && (cardIndex < 5)){
            cardIndex+=1;
            setCardMove(cardIndex*(cardWidth + 20));
        }
        if((touchStart - touchEnd < 0) && (cardIndex >= 0)){
            cardIndex-=1;
            setCardMove(cardIndex*(cardWidth + 20));
        }
    }
    
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
        setCardWidth(card.current.offsetWidth);
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
            <div
            className="card-box"
            onTouchStart={(el)=>startTouchEvent(el)}
            onTouchEnd={(el)=>endtTouchEvent(el)}
            onTouchMove={(el)=>moveTouchEvent(el)}
            >
                <div
                style={
                    {transform: `translateX(-${cardMove}px)`}
                }
                className="box"
                >
                    {showCards(reviewItems)}
                </div>
            </div>
            </> }
        </section>
    </>
  )
}