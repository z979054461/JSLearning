import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function tryConvert(temperature, convert) {
    const convertFns = {
        toCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5 / 9;
        },
        toFahrenheit(celsius) {
            return (celsius * 9 / 5) + 32;
        }
    }
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertFns[convert](input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.state = { temperature: '' };
    // }

    // handleChange(e) {
    //     this.setState({ temperature: e.target.value });
    // }

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={this.props.temperature}
                    onChange={e => this.props.onTemperatureChange(e.target.value)} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }
    // handleCelsiusChange(temperature) {
    //     this.setState({ scale: 'c', temperature });
    // }

    // handleFahrenheitChange(temperature) {
    //     this.setState({ scale: 'f', temperature });
    // }
    onTemperatureChange(scale, temperature) {
        this.setState({ scale, temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, 'toCelsius') : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, 'toFahrenheit') : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    // onTemperatureChange={this.handleCelsiusChange} />
                    onTemperatureChange={v => this.onTemperatureChange('c', v)} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={v => this.onTemperatureChange('f', v)} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)