import "../SCSS/SCSS-Components/EventsBlocks.scss"
import { EventsCards, Months } from "../assets/content"
import { Clock } from "../assets/Icons/Icons";

export const EventsBlocks = () => {
    function verify(obj, month){
        var exist = false;
        for(var i =0; i<obj.length; i++){
            if( obj[i].month == month){
                exist = exist || true;
            }else{
                exist = exist || false;
            }
        }
        return exist;
    }

    const SortEventsCard = EventsCards.sort((a,b) => a.month - b.month ); 
  return (
    <>
        {Months.reverse().map((month, index)=>{
            console.log(verify(EventsCards, month));
            if (verify(EventsCards, month)){
                console.log(month);
                return (
                <div key={index} className="events-title-block">
                    <div className="month-title">
                        {month}
                    </div>
                    <div className="events-bloks">
                        {SortEventsCard.filter(event => event.month == month).map((filterEvent,index) =>(
                            <div
                            className="event"
                            style={{order: filterEvent.date}}
                            key={index}>
                                <div className="event-date-clock">
                                    <div className="event-date">
                                        <span>{filterEvent.date}</span>
                                        <span>{filterEvent.month}</span>
                                    </div>
                                    <div className="event-clock">
                                        <Clock/>
                                        <span>{filterEvent.time}</span>
                                    </div>
                                </div>
                                <img src={filterEvent.img} alt={filterEvent.title} />
                                <span className="event-title">
                                    {filterEvent.title}
                                </span>
                                <div className="event-description-button">
                                    <div className="event-description">
                                        {filterEvent.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )
            }
        })}
    </>
  )
}
