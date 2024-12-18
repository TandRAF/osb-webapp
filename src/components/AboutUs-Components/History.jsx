import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/History.scss"
import { HistoryEvents } from "../../assets/content"
import { Time, Stars } from "../../assets/Icons/Icons"
export const History = () => {
  return (
      <section className="history-container">
        <Stars/>
        <h2> <b>Istoric</b></h2>
        <p><b>OSB Timișoara</b> a luat naștere ca rezultat al implicării și dorinței de a uni studenții basarabeni din Timișoara într-o comunitate solidă.</p>
        <div className="history-blocks">
            {HistoryEvents.map((item,index)=>{
                return(
                <div key={index} className="history-event-block">
                    <div className="date-text-block">
                        <div className={index%2 == 0?"date-block" : "date-block left"}>
                            <Time/>
                            <span>{item.date} <b> {item.year}</b></span>
                        </div>
                        <div className="date-detalies">
                            {item.event}
                        </div>
                        <img className={item.img == "none"? "none": ""}
                        src={item.img} alt="" />
                    </div>
                    <div className="line-circle-block">
                            <div className="top-line"></div>
                            <div className="circle"></div>
                            <div className="bottom-line"></div>
                    </div>
                    <div className="void">
                    </div>
                </div>
                )
            })}
        </div>
    </section>
  )
}
