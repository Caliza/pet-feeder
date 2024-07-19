import React, { Component } from 'react';
import './App.css';
import './FeedPannel.css'
import Clock from './Clock';
import Pannel from './FeedPannel';
import { render } from '@testing-library/react';

class App extends Component {

  

   state = {
   
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
  }
  
 

 componentDidMount () {
   setInterval(() => {
     this.setClock()
   }, 1000);
 }

   setClock = () =>{
    
      const currentDate = new Date;
       let secondRatio = currentDate.getSeconds() / 60;
       let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
       let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
      this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60}) 
       this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60}) 
       this.setState({hourRatio:hourRatio = (minuteRatio + currentDate.getHours()) / 12});
       
      
   }    
  

  render(){
    const {secondRatio, minuteRatio, hourRatio} = this.state
    return (
     <div> <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/></div>
     
    );
   // <div><Pannel/></div>
    
  }

   //render(){return (
    //<Pannel/>
  //);}
   
}



export default App;