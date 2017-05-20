import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import Fetch from 'react-fetch';
import './App.css';
import Player from './Components/HowlerPlyr'

        //  <Fetch url="http://api.openweathermap.org/data/2.5/weather?  q=London,uk">
          
        // </Fetch>

class App extends Component {
  render() {
    return (
      <div>
        <ReactHowler
          src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
          playing={false}
        />
        <Player />
      </div>

    )

   
  }
}

export default App;
