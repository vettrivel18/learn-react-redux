import React from 'react';
import {connect} from 'react-redux';
import {getStreamById, updateStream} from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
    
    componentDidMount(){
        this.props.getStreamById(this.props.match.params.id);
    }
    onSubmit = (formValues)=>{
        this.props.updateStream(this.props.match.params.id,formValues);
    }

    render(){
        if (this.props.stream) {
            return (
                <div>
                    <h3>Edit a stream</h3>
                    <StreamForm 
                        initialValues={_.pick(this.props.stream, 'title', 'description')} 
                        onSubmit={this.onSubmit}/>
                </div>
            ); 
        }
        return <div>Loading...</div>;
    }

}

const mapDispatchToProps = dispatch =>({
    getStreamById : (id)=> getStreamById(dispatch,id),
    updateStream : (id,data) => updateStream (dispatch, id, data)
});

const mapStateToProps = (state) =>{
    return {
        stream : state.streams.stream
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamEdit);