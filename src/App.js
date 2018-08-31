import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      productInventory:[
        
      ]
    }
  }

  componentDidMount () {
    axios.get('/api/inventory')
    .then(res => this.setState({
      productInventory: res.data
    }))
  }

  addToInventory = (imgURL, pName, pPrice) => {
    axios.post('/api/product', {imgURL: imgURL, pName: pName, pPrice: pPrice})
    .then(res => this.setState({
      productInventory: res.data
    }))
  }

  updateProduct = () => {

  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Form
        addToInventory = {this.addToInventory}
        updateProduct = {this.updateProduct}
        />
        <Dashboard
        productInventory = {this.state.productInventory}
        />
      </div>
    );
  }
}

export default App;
