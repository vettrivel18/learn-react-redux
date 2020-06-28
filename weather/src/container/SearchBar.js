import React, { useState } from 'react';
import { fetchWeather} from '../actions';
import { connect } from 'react-redux';


const SearchBar = (props) =>{
    const [term, setTerm] = useState('');

    const onInputChange = (event)=>{
        setTerm(event.target.value);
    } 
    
    const onFormSubmit = (event)=>{
        event.preventDefault();
        props.fetchWeather(term);
    }
    return (
        <form className="input-group" onSubmit={onFormSubmit}>
            <input className="form-control" placeholder="Get a five-day forecast in your favorite cities" value={term} onChange={onInputChange}/>
            <span className="input-group-btn" >
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
    );
}


const mapDispatchToProps = (dispatch) =>({
    fetchWeather : (city)=> fetchWeather(city,dispatch)
});

const mapStateToProps = state=> ({
    data: state.data
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);