import axios from 'axios';

const API_KEY='6a4c3a4d54f3ea0b9a930218961a0cee';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async (city,dispatch) =>{
    const url = `${ROOT_URL}&q=${city},uk}`
    const response =  await axios.get(url);
    dispatch({
        type : FETCH_WEATHER,
        payload: response
    })
}