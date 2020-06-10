import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {deleteStream} from '../../actions'
import {connect} from 'react-redux';

const StreamDelete = (props) =>{
    console.log(props);
    
    const onClickDelete =()=>{
        props.deleteStream(props.match.params.id);
        hide();
    }

    const actions = (
        <>
            <button onClick={onClickDelete} className="ui button negative">Delete</button>
            <button onClick={hide} className="ui button">Cancel</button>
        </>
    );
    return (
        <div>
            <Modal header="Delete Stream" 
                content="Are you sure want to delete this stream?"
                actions={actions}
                onDismiss={hide}
            />
        </div>
    );
}

const hide =()=>{
    history.push('/');
}

const mapDispatchToProps = dispatch =>({
    deleteStream : (id) => deleteStream(id,dispatch)
});

export default connect(null, mapDispatchToProps)(StreamDelete);