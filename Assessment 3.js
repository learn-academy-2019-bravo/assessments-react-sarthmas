// // React Assessments
//
// /* 1. Write a simple React component that simply prints "I am a component" to
// the screen. Be sure to include all necessary imports, exports, etc...*/
//
import React, {Component} from 'react'

class One extends Component {
  constructor(props){
    super(props)
      this.state = {
        text: "I am a component"
    }
}

render(){
  let {text} = this.state
    )
})

return(
  <div>
  <h1>{text}</h1>
  </div>
)
}
}
export default One;
//
//
// /*2. Practice With Loops: In React, we often use the map function to iterate
// over an array held in state. To get more practice with this, write a vanilla
// javascript for loop that outputs the same thing as the map function below.*/
//
//
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array*/
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
for (i=0; i<stuffArray.length; i++) {
let newArray = stuffArray[i] + "is at index: " +[i];
console.log(newArray)
}


/* 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need
to find the signle lowest price from the array. Write a function that
takes in an array of numbers, and returns the lowest price*/

array1 = [8,2,3,10,5,6]
array1.sort(function(a, b){return a - b})
min = array1[0]
