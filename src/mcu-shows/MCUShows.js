// FINAL REACT EXERCISE

// 1a
import './MCUShows.css';

 
// 1b & 5c - destructuring props with dates prop and randomAvenger prop(which has a value of the 'randomAvenger' function which is called in the App.js file in prop as randomAvenger={randomAvenger})
const MCUShows = ({dates, randomAvenger, nextAvenger}) => {
    
   // 1c
    return (
        // 4a
        <div className="MCUShows">
            {/* 3a */}
            <h1 className="MCUShows-H1" style={{fontFamily: "Georgia", textDecoration: "underline"}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            {/* 5c */}
            <p>WandaVision: {dates.wandaVision} </p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter} </p>
            <p>Loki: {dates.loki} </p>
            <p>Hawkeye: {dates.hawkeye} </p>
            {/* 6e - set onClick to run the 'randomAvenger' function that was created in the App.js file*/}
            <button onClick={randomAvenger}>RANDOM AVENGER</button>
            {/* 7c -  */}
            <button onClick={nextAvenger}>NEXT AVENGER</button>
        </div>
    );
}
export default MCUShows;