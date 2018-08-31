import React, {Component} from 'react'

class Form extends Component {
    constructor (props) {
        super (props)

        this.state = {
            imgURL: '',
            pName: '',
            pPrice: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (val) {
        this.setState({
            [val.target.name]: val.target.value
            
        })
        
    }

    handleCancel = () => {
        // console.log("you canceled!")
        this.setState({
            imgURL: '',
            pName: '',
            pPrice: ''
        })
    
    }
    
    render () {
        // console.log('handleChange:', this.state)
        return (
            <div>
                <h1>Form</h1>
                <div>
                    <h4>Image URL:</h4>
                    <input
                        value = {this.state.imgURL}
                        onChange = {this.handleChange} 
                        name = 'imgURL'/>
                </div>
                <div>
                    <h4>Product Name:</h4>
                    <input
                        value = {this.state.pName} 
                        onChange = {this.handleChange}
                        name = 'pName'
                        />
                </div>
                <div>
                    <h4>Price:</h4>
                    <input
                        value = {this.state.pPrice} 
                        onChange = {this.handleChange}
                        name = 'pPrice'/>
                </div>
                <div>
                    <button
                    onClick = {this.handleCancel}
                    >Cancel</button>
                    <button>Add to Inventory</button>
                </div>
                
            </div>
        )
    }
}
export default Form