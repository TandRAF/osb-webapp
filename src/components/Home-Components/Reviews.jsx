import "../../SCSS/SCSS-Components/SCSS-home-components/Reviews.scss"
import { Stars,Quotes } from "../../assets/Icons/Icons"
import { reviewItems } from "../../assets/content"
import { useState,useEffect,useRef } from "react"


export const Reviews = () => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);
    const card = useRef({});
    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 150) {
            if(cardIndex < 5){
                setCardIndex(()=>cardIndex+1);
            }
        console.log("right");
        }

        if (touchStart - touchEnd < 150) {
            if(cardIndex > 0){
                setCardIndex(()=>cardIndex-1);
            }
        // do your stuff here for right swipe
        console.log("left");
        }
    }
    const [width, setWidth] = useState(window.innerWidth);
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
                            <div style={{ backgroundImage: `url("src/assets/Images/${item.img}")` }} className="card-img">
        
                            </div>
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="card-box" >
                <div
                style={
                    {transform: `translateX(-${cardIndex*(cardWidth + 20)}px)`}
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