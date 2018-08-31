import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      productInventory:[
        
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Dashboard
        productInventory = {this.state.productInventory}
        />
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
