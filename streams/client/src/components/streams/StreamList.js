import React from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';
import {Link} from 'react-router-dom';

const mapStateToProps = (state)=>{
    return{
        streams: Object.values(state.streams.streamArray),
        currentUserId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
};

class StreamList extends React.Component {
        
    componentDidMount() {
        this.props.getStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`}><button className="ui button negative">Delete</button></Link>
                </div>
            );
        }
    }

    renderStreams(){
        return this.props.streams.map(stream =>{
            return (
                <div className="item" key={stream.id}>
                        {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <div className="header">{stream.title}</div>
                        <div className="description">{stream.description} </div>
                    </div>
                </div>
            );
        });
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div>
                    <Link to="/streams/new" className="ui button primary"> Create Stream</Link>
                </div>
            );
        }
    }
       
    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderStreams()}</div>
                    {this.renderCreate()}
            </div>
        );
    }
        
}

export default connect(mapStateToProps, {getStreams})(StreamList);