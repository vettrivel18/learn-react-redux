import React , {useState, useEffect} from 'react';



 

const SearchBar = (props)=> {
    //state = {term : ''};
    const [term,setTerm] = useState('')
    
const onChangeInput = event =>{
        setTerm(event.target.value);
        //this.setState({term: event.target.value})
    }

     const onSubmit = event =>{
        event.preventDefault();
        props.onFormSubmit(term);
    }
    
        return (
            <div className="search-bar ui segment">
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                        <label>SearchBar</label>
                        <input type="text" value={term} onChange={onChangeInput}/>
                    </div>
                </form>
                </div>
        );
    
}

export default SearchBar;