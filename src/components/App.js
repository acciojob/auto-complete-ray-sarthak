
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

let fruits = [
  "apple", "banana", "cherry", "date", "elderberry", "fig",
  "grape", "honeydew", "kiwi", "lemon", "mango", "orange",
  "papaya", "quince", "raspberry", "strawberry", "tangerine",
  "watermelon", "apricot", "blueberry", "coconut", "dragonfruit",
  "guava", "jackfruit", "kiwifruit", "lime", "lychee", "melon",
  "nectarine", "olive", "passionfruit", "peach", "pear", "pineapple",
  "plum", "pomegranate", "quince", "rhubarb", "starfruit",
  "blackberry", "cantaloupe", "cranberry", "grapefruit", "pomegranate",
  "pomegranate", "mandarin", "persimmon", "pepino", "persimmon"
];

let [value,setValue]=useState();

let [suggestions,setSuggestions]=useState([]);


function handlechange(e){
  setValue(e.target.value);

  let filter=fruits.filter(fruit=>fruit.toLowerCase().includes(value.toLowerCase()));
  setSuggestions(filter);
}
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={value}onChange={handlechange}></input>
        <ul>
       { value&&suggestions.map((item,ind)=>(
          <li key={ind}>{item}</li>
        ))}
        </ul>


    </div>
  )
}

export default App
