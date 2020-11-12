import React, { Component } from 'react'
import Form from './Form'
import { Container, Row, Col } from 'react-grid-system';
import './list.css'

class List extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (
            <div className="list_app">
                 <div className="left">
                <Form
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                </div>
                
                <div className="right">
                <div className="itt">
                <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                            <div className="All">
                                <td>Name: {item.Name}</td><br/>
                                <td>Email: {item.Email}</td><br/>
                                <td>Address: {item.Address}</td><br/>
                                <td>Phone No: {item.PhoneNo}</td><br/>
                                <td className="All1"><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td className="All2"><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                                </div>
                            </tr>
                        })}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        )
    }
}

export default List