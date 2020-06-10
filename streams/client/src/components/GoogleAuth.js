import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '601524999710-v2op2j8di68polojb54s7n7kopq30bug.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onSignInClick = ()=>{
        this.auth.signIn();
      
    }

    onSignOutClick = ()=>{
        this.auth.signOut();
       
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <div>
                    Welcome<h3> {this.auth.currentUser.get().getBasicProfile().getName()}</h3>
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>SignOut</button>
                </div>
            );
        }else{
            return (
                <button className="ui blue google button" onClick={this.onSignInClick}>
                    <i className="google icon"/>SignIn</button>
            );
        }
    }

    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = state =>{
    return {isSignedIn : state.auth.isSignedIn, userId : state.auth.userId}
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);