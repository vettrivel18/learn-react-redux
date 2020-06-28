import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import _ from 'lodash';
import styles from '../styles/styles.css';
import GoogleMap from './GoogleMap';


const WeatherDetails = ({weather})=>{
    const renderWeather =(cityData)=>{
        const cityName = cityData.city.name;
        const temps = _.map(cityData.list.map(item=> item.main.temp),(temp =>temp-273));
        const pressures = cityData.list.map(item=>item.main.pressure);
        const humidity = cityData.list.map(item=>item.main.humidity);
        const {lat, lon} = cityData.city.coord;
        return(<tr key={cityName}>
            <td><GoogleMap lon={lon} lat={lat}/></td>
            <td><Chart data={temps} units="°C" color="orange"/></td>
            <td><Chart data={pressures} units="hPa" color="green"/></td>
            <td><Chart data={humidity} units="%" color="black"/></td>
        </tr>);
    }
    const isDataEmpty = weather.length === 0 ? true : false
    
        return (<table className="table table-hover">
        <thead>
            <tr>
                <td><h6>City</h6></td>
                <td><h6>Temperature (°C)</h6></td>
                <td><h6>Pressure (hPa)</h6></td>
                <td><h6>Humidity %</h6></td>
            </tr>
        </thead>
        <tbody>
                {!isDataEmpty ?
                (weather.map(renderWeather) ):
                <></>

                }
        </tbody>
        </table>);
        
    
}

const mapStateToProps = state=> ({
    weather: state.weather
})

export default connect(mapStateToProps) (WeatherDetails);