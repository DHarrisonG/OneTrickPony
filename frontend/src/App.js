import React from 'react';
import './App.css';
// import LoginForm from './LoginForm';
// import InputField from './InputField';
// import SubmitBUTTON from './SubmitButton';
// import UserStore from './stores/UserStore'; 

class App extends React.Component {

  async componentDidMount(){
    try {
      let res = await fetch('./isLoggedIn', {
        method: 'POST',
        headers: {

        }
      }) 
    }

    catch(e) {

    }
  }

  render() {
    return (
      <div className="app">
        <h1>Ayyyy lmao</h1>
      </div>
    );
  }

}

export default App;
