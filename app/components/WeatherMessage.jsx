var React = require('react');
//var WeatherMessage = (props) => {
var WeatherMessage = ({temp, location}) => {
    //var {temp, location} = props;
    return (
        <div>
            <h3>The temperature is {temp}, in {location}</h3>
        </div>
    );
};

module.exports = WeatherMessage;