import React, { Component } from 'react'

class Form extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                Email: '',
                Address: '',
                Name: '',
                PhoneNo: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
       this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <div className="detail">
            <form onSubmit={this.handleSubmit} autoComplete="off" className="inside">
                <input name="Name" placeholder="Name" onChange={this.handleInputChange} value={this.state.Name} /><br />
                <input name="Email" placeholder="Email" onChange={this.handleInputChange} value={this.state.Email} /><br />
                <input name="Address" placeholder="Address" onChange={this.handleInputChange} value={this.state.Address} /><br />
                
                <input name="PhoneNo" placeholder="Phone No" onChange={this.handleInputChange} value={this.state.PhoneNo} /><br />
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default Form