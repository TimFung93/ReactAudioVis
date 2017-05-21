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

    this.handleOnPlay= this.handleOnPlay.bind(this)
    this.handleStop= this.handleStop.bind(this)
    this.buildAnalyzer= this.buildAnalyzer.bind(this) 
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

    //Build web audio analyzer

    buildAnalyzer(){
        
    }

    
    render() {

        return (
            <div>
                <ReactHowler
                    src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
                    playing={
                        this.state.playing
                    }
                    volume={this.state.volume}

                />
                <button onClick= {this.handleOnPlay}>
                    Play 
                </button>   
                <button onClick= {this.handleStop}>
                    Stop
                 </button>
                 <div className= 'volume'>
                    <label> 
                        Volume:
                        <span className= 'slider-container'>
                            <input 
                                type= 'range' 
                                min= '0'
                                max= '1'
                                step= '0.05'
                                onChange= {e=> this.setState({volume: parseFloat(e.target.value)})}
                                value="{this.state.volume}"
                                style= {{verticalAlign: 'bottom'}}
                            />
                        </span>
                        {this.state.volume.toFixed(2)}
                    </label>
                 </div>
                 
            </div>
            )

   
  }
}


