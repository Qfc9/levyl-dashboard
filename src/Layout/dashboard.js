import React from "react";
import { Link } from "react-router";

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { Auth } from 'aws-amplify';

import Signin from "../Components/Signin";
import Header from "../Components/Header";

Amplify.configure(aws_exports);

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn:false
    }
  }

  signOut(e)
  {
    e.preventDefault();
    Auth.signOut();
    this.setState({loggedIn:false})
  }

  componentDidMount()
  {
    Auth.currentSession()
        .then(this.setState({loggedIn:true}))
        .catch(this.setState({loggedIn:false}));
  }

  handleLoggedIn(loggedIn)
  {
    this.setState({loggedIn:loggedIn})
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <Signin updateLoggedIn={this.handleLoggedIn.bind(this)} signinUser={this.signinUser}></Signin>
        </div>
      );
    }
    else {
      return(
        <div>
          <Header></Header>
          <h1>asdf</h1>
          <form onSubmit={this.signOut.bind(this)} className="form-signin">
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign out</button>
          </form>
        </div>
      );
    }
  }
}
