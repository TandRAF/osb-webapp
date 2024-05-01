import {  useState, useRef,useEffect} from "react"
import { Crown,Stars } from "../../assets/Icons/Icons"
import { Link } from "react-router-dom"
import { questionAnswers } from "../../assets/content"
import "../../SCSS/SCSS-Components/SCSS-home-components/RAQ.scss"

export const FAQ = () => {
    const [asnwerState, setAnswerState] = useState(0);
    const container = useRef({});
    const [hightState, setHightState] = useState(0);
    const setHigh =(index)=>{
        if(index == asnwerState){
            console.log("merge", hightState);
            return({height:hightState+"px"})
        }else{
            return({height:"0px"})
        }
    }
    useEffect(() => {
        setHightState(container.current[0].offsetHeight)
    },[]);
  return (
    <>
        <section className="question-answer-section">
            <div className="q-a-chat">
                {questionAnswers.map((item,index)=>{
                    return(
                    <div key={index} 
                    className={`question-answer ${(asnwerState == index)?"active":""}`}
                    onClick={()=>{
                        setAnswerState(index);
                        setHightState(container.current[index].offsetHeight);
                        console.log(container.current[index].offsetHeight);
                    }}
                    >
                        <div className="question">
                            <div className={`q-icon ${index == (questionAnswers.length -1 )? "active":""}`}></div>
                            <p>
                                {item.question}
                            </p>
                        </div>
                        <div  
                        style={setHigh(index)}>
                            <div 
                            ref={(element) => container.current[index] = element} 
                            className="p-answer">
                                <p>Your <b>Answer</b></p>
                                <div className={`answer ${(asnwerState == index)?"active":""}`}>
                                    <p>{item.answer}</p>
                                    <div className="a-icon">
                                        <Stars/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="q-a-info">
                <Crown/>
                <h2> <b>FAQ</b> <br />
                Întrebări frecvente </h2>
                <p>
                    Dacă aveți alte întrebări sau nelămuriri, nu ezitați să ne contactați.  Suntem aici pentru a vă ajuta și a oferi clarificări în legătură cu  serviciile noastre și activitățile noastre.
                </p>
                <Link to="/contacte">Contactează-ne</Link>
            </div>
        </section>
    </>
  )
}
