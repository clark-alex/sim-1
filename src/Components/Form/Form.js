import React, {Component} from 'react'

class Form extends Component {
    constructor (props) {
        super (props)

        this.state = {
            imgURL: '',
            pName: '',
            pPrice: '',
            addButtonToggle: false,
            editButtonToggle: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (val) {
        this.setState({
            [val.target.name]: val.target.value,
            addButtonToggle: true
            
        })
        
    }

    handleCancel = () => {
        // console.log("you canceled!")
        this.setState({
            imgURL: '',
            pName: '',
            pPrice: '',
            addButtonToggle: false
        })
    
    }

    handleEditClick = () => {
        this.setState({
            editButtonToggle: true
        })
    }
    
    render () {
        // console.log('hi', this.state)
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
                {
                    this.state.addButtonToggle
                    ?
                        <div>
                            <button
                                onClick = {this.handleCancel}
                             >Cancel
                            </button>
                            <button
                                onClick = {() => {
                                    let {imgURL, pName, pPrice} = this.state
                                    // console.log(pName)
                                    this.props.addToInventory(imgURL, pName, pPrice)
                                    this.setState({
                                         imgURL: '',
                                         pName: '',
                                         pPrice: ''
                                    })
                                }}
                            >Add to Inventory
                            </button>
                        </div>
                    :
                    <div>
                        <div>
                            <button
                                onClick = {this.handleCancel}
                            >Cancel
                            </button>
                        </div>
                        <div>
                            <button
                                onClick = {this.handleEditClick}
                            >Edit An Existing Product
                            </button>
                            {
                                this.state.editButtonToggle
                                ?
                                <div>
                                    <input type="text"/>
                                    <button
                                        onClick = {()=> {
                                            this.setState({editButtonToggle: false})
                                        }} 
                                    >Save Edit
                                    </button> 
                                </div>
                                :
                                <p>Hi mom!</p>
                            }
                            
                        </div>
                    </div>
                    
                }
                <hr/>
            </div>
        )
    }
}
export default Form