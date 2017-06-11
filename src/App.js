import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'unfetch'

class App extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    fetch('http://athlete-tracy-30723.netlify.com/users.json')
      .then( r => r.json() )
      .then( data => {
        this.setState({data})
      });
  }

  render() {
    console.log(this.state.data)
    const {data} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to a Netlify User API</h2>
        </div>
        <p className="App-intro">
          <ul>
            {data &&
              data.map((item) => (
                <li style={{listStyleType: 'none'}} key={item.id}>
                  {item.name}
                </li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
