import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { Auth } from 'aws-amplify';
import '../App.css';

Amplify.configure(aws_exports);

class Signin extends Component {

  // onLoad()
  // {
  //   Auth.currentSession()
  //       .then(data => this.isUserValid(data))
  //       .catch(err => console.log(err));
  // }

  isUserValid(user){
    if (user) {
      console.log(user)
      this.setState({loggedIn:true},
      function(){
        this.props.updateLoggedIn(this.state.loggedIn);
      });
    }
  }

  signinUser(e){
    // Stops the reload of the post
    e.preventDefault();

    this.user = Auth.signIn(this.refs.inputEmail.value, this.refs.inputPassword.value)
        .then(user => this.isUserValid(user))
        .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Signin">
          <form onSubmit={this.signinUser.bind(this)} className="form-signin">
            <img width="250px" alt="Levyl Logo" src="https://levyl.co/wp-content/uploads/2018/09/color_logo_transparent-2.png" />
            <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text" ref="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" ref="inputPassword" className="form-control" placeholder="Password" required="" />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
      </div>
    );
  }
}

export default Signin;
