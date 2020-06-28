import React from 'react';
import WeatherDetails from './WeatherDetails';
import SearchBar from '../container/SearchBar';

const App = () =>{
   
    return (
        <div className="container">
            <SearchBar />
            
            <WeatherDetails/>
            
        </div>);
}



export default App;