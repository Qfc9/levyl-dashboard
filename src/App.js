import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react';
import Signin from './Components/Signin';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <Signin />
      </div>
    );
  }
}

export default App;
// export default withAuthenticator(App, true);
