import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Name: {this.props.info}</p>
                <p>Name: {this.props.price}</p>
            </div>
        )
    }
}

