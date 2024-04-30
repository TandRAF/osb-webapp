import "../../SCSS/SCSS-Components/SCSS-home-components/Reviews.scss"
import { Stars,Quotes } from "../../assets/Icons/Icons"
import { reviewItems } from "../../assets/content"

export const Reviews = () => {
  return (
    <>
        <section className="reviews-info-blocks">
            <div className="reviews-info">
                <Stars/>
                <h2>Ce spun membrii noștri ?</h2>
                <p>Părerile și experiențele membrilor noștri sunt fundamentale pentru noi.  Iată ce au de spus despre implicarea lor în comunitatea noastră.  Feedback-ul lor ne inspiră și ne motivează să continuăm să creștem și să  dezvoltăm proiectele noastre, pentru a aduce beneficii reale membrilor  noștri și comunității în ansamblu.</p>
            </div>
            {reviewItems.map((item,index)=>{
                return(
                    <div key={index} className="card">
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
        </section>
    </>
  )
}
