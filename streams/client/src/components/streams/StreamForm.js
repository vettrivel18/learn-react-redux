import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {resetStream} from '../../actions'

class StreamForm extends React.Component{
    
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">{error}</div>
            );
        }
    }

    renderInput = ({input, label, meta})=>{
        const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues);
    }

    resetStream = () =>{
        this.props.resetStream();
    }

    render (){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
                <Link to="/" className="ui button primary" onClick={this.resetStream}>Back</Link>
            </form>
        );
    }
}

const validate = (formValues) =>{
    const errors ={};
    if(!formValues.title){
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }
    return errors;
}

const mapDispathToProps = disptach => ({
    resetStream : () => resetStream(disptach)
});

 const formWrapped = reduxForm({
    form: 'streamForm',
    validate
}) (StreamForm);

export default connect(null, mapDispathToProps)(formWrapped);
