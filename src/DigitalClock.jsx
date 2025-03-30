
import React  , {useState , useEffect } from "react";

function DigitalClock(){

    const [time , setTime ] = useState(new Date());

    useEffect( () => {
        const intervalId = setInterval( ()=> {
            setTime(new Date());
        } , 1000);

        return () => clearInterval(intervalId);
    } , []) ;

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiam = hours >= 12 ? "PM" : "AM";

        if(hours > 12){
            hours = hours - 12;
        }
        else if(hours === 12){
            hours = 12;
        }

        // hours = hours % 12 || 12 ;

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiam} ` 
    }


    function padZero(num){
        return (num < 10 ? "0" : "" ) + num ;

    }



    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>

            </div>

        </div>
    );
}

export default DigitalClock;