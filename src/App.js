// 2a
import MCUShows from './mcu-shows/MCUShows';

// 6a & 8a
import { useEffect, useState } from 'react';

// 5a
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  hawkeye: 'Fall of 2021'
}

// 6b
const avengers = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Hawkeye'
];


function App() {
  // useState variables should all be together, useEffect grouped together and functions should be placed together


  // 6c - Use useState(0) & destructure using index, setIndex to get a random avenger from the avenger array.
  const [index, setIndex] = useState(0);
  // 6d - create randomAvenger function with anony arrow function to setIndex(to math.floor (math.random * array.length) -- when this function runs, it will 'setIndex' to random number within length of avengers array and will set that number to the new value of 'index'. Pulling new value of 'index' below when calling for {avengers[index]} in the h1 with Random Avenger text
  const randomAvenger = () => setIndex(Math.floor(Math.random() * avengers.length));

  // 7a - Use useState & destructure
  const [num, setNum] = useState(0);
  // 7d - Creating a nextAvenger function with anony arrow function with ternary. value for num starts at 0. Know avengers array length is 5, so avengers.length - 1 (4). so if num is equal to 4? then will setNum to 0 (which is scarlett witch item) if num is not equal to 4, then it will setNum as the value of num(0) + 1, which is 1 and is the next item in the avengers array. Will go thru the avengers array displaying the next item in the array upon click of button. Setting button 'onClick' in the MCUShows.js file to call the nextAvenger prop when clicked. The nextAvengers prop is set as the 'nextAvengers' function in the App.js file on render of MCUShows component. Set in h1 to display avengers value of nm
  const nextAvenger = () => {
    num === (avengers.length - 1) ? setNum(0) : setNum(num + 1);
  }

  // 8a
  // The function passed into the useEffect function/hook will run everytime the state value that is passed into the array (2nd argument) is updated. (NOTE: If nothing is passed in for a second argument, then the function will run whenever any state values are updated) 
  // When 'nextAvenger' button is pressed it will alert "that the next avenger has been displayed".
  useEffect(() => {
    alert('The Next Avenger has been displayed');
  }, [num]);

   return(
      <div>
        {/* 2b */}
        <h1>FINAL REACT EXERCISE</h1>
        {/* 2c & 5b */}
        <MCUShows 
          dates={releaseDates}
          // 6d - destructure the randomAvenger: set randomAvenger as prop to run 'onClick' on button in MCUShows.js file
          randomAvenger={randomAvenger} 
          // 7b - 
          nextAvenger={nextAvenger}
        />
        {/* 6d - set to display index(number) - from the setIndex value on the randomAvengers function - that corresponds to the item at that index in the avengers array*/}
        <h1>Random Avenger: {avengers[index]}</h1>

        {/* 7b -  */}
        <h1>Next Avenger: {avengers[num]}</h1>
      </div>
   );
}

export default App;
