import { useEffect, useState, useRef } from "react";
import { Crown } from "../../assets/Icons/Icons";
import { useInView } from "react-spring";
import "../../SCSS/SCSS-Components/SCSS-home-components/Statistic.scss";
function Counter({ targetNumber }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const increment = () => {
            if (count < targetNumber && targetNumber <100) {
                setCount(prevCount => prevCount + 1);
            }else if (count < targetNumber && targetNumber >=100) {
                setCount(prevCount => prevCount + 10);
            }
        }; 
        const timer = setTimeout(increment, 50); // Adjust the interval as needed
        return () => clearTimeout(timer);
    }, [count, targetNumber]);

    let countNumber = Math.ceil(Math.log10(count + 1));
    return <span><span>{Math.floor(count/Math.pow(10,countNumber-1))}</span>{count%Math.pow(10,countNumber-1)}</span>;
}
export const Statistic = () => {
    // const myRef = useRaf();
    // const [visible, setVsible] = useState()
    // useEffect(()=>{
    //     const observer = new IntersectionObserver((entries)=>{
    //         const entry = entries[0]
    //         console.log("entry", entry);
    //     })
    //     observer.observe(myRef.current);
    // },[]);

  return (
    <>
    <section className="statistic-info-count">
        <div className="statistic-info">
            <Crown/>
            <h2>Comunitatea Noastra devine mai buna cu <b>voi</b></h2>
            <p>De-a lungul anilor, comunitatea noastră a crescut și s-a dezvoltat într-o rețea puternică și solidară.</p>
        </div>
        <div className="statistic-count">
            <div className="statistic-count-info">
                <Counter targetNumber={210}/>
                <h3>Membrii</h3>
            </div>
            <div className="statistic-count-info">
            <Counter targetNumber={11}/>
                <h3>Proiecte</h3>
            </div>
            <div className="statistic-count-info">
            <Counter targetNumber={23}/>
                <h3>Ani</h3>
            </div>
        </div>
    </section>
    </>
  )
}
