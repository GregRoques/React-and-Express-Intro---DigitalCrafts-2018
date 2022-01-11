import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';


class TemperatureApp extends Component{
    constructor(){
        super();
        this.state = {
            temperature: 18,
            scale: 'c'
        }
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    }

    handleCelsiusChange(value){
        if(value.target.value.match(/^\d*$/)){
        this.setState({
            temperature: value.target.value,
            scale: "c"
        })
    }

    }

    handleFahrenheitChange(value){
        if(value.target.value.match(/^\d*$/)){
        this.setState({
            temperature: value.target.value,
            scale: "f"
        })
    }
    }
        render(){
            const scale = this.state.scale;
            const temp = this.state.temperature;
            let fTemp = "";
            let cTemp = "";
            if (scale === 'c'){
                fTemp = (temp * 9/5) + 32;
                cTemp = temp;
            }else if(scale==='f'){
                fTemp = temp;
                cTemp = (temp -32)*5/9
            }

            return(
            <div id="temp-app">
                <TemperatureInput scale="f" temperature={fTemp} onChange={this.handleFahrenheitChange}/>
                <TemperatureInput scale="c" temperature={cTemp} onChange={this.handleCelsiusChange}/>
                <BoilingVerdict temperature ={cTemp}/>
            </div>
            )
        }
    }

    export default TemperatureApp;