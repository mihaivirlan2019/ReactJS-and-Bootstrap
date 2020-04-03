import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostsTable from './PostsTable';

function ShowBanner(props) {
  if (props.time > 45) {
    return(
      <div className = "rest_block"> Odihna </div>
    )
  } else {
    return(
      <div className = "Work_block"> Timpul de lucru personal </div>
    )
  }

}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
componentDidMount() {
  this.timerId = setInterval(
    ()=> this.tick(),
    1000
  )
}

componentWillUnmount() {
  clearInterval(this.timerId)
}

tick() {
  this.setState({
    date: new Date()
  })
}


  render() {
    return(
      <div>
        <PostsTable /> 
        {<ShowBanner time={this.state.date.getSeconds()}/>}
        {<h1> Ora actuala {this.state.date.toLocaleTimeString()} </h1> }
      </div>
    )
  }
}

export default Clock;
