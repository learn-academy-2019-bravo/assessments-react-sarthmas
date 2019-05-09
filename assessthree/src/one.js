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

}

return(
  <h1>Hello</h1>
)
}

export default One;
