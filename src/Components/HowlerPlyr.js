import React, {Component} from 'react';
import ReactHowler from 'react-howler';

export default class Player  extends Component {
    constructor (props){
        super(props)
        this.state = {
            playing: false,
            volume: 1.0,
            context: {} 
            
        }

    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    }

    // start music
    handleOnPlay(){
        this.setState({
            playing: true
        })
    }

    // stop music
    handleStop(){
        console.log('this.state.playing'+''+ this.state.playing)
        this.setState({
            playing: false
        })
    }
    // pause music
    
    render() {
        return (
            <div>
                <ReactHowler
                    src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
                    playing={false}
                />
                <button onClick={this.handleOnPlay}>
                    Play 
                </button>   
                <button onClick={this.handleStop}>
                    Stop
                 </button>      
            </div>
            )

   
  }
}


