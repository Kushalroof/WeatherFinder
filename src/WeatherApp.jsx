import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo]= useState({
        city:"Delhi",
        feelsLike : 24,
        temp:20,
        tempMin: 10,
        tempMax:25,
        humidity:47,
        weather:"Sunny"
    });

    let updateInfo= (result) =>{
        setweatherInfo(result);
    };

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};