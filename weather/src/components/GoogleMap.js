import React from 'react';

class GoogleMap extends React.Component {
    
    componentDidMount(){
        new window.google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        }) 
    }

    render(){
        return(<div ref="map"/>);
    }
    
}

export default GoogleMap;