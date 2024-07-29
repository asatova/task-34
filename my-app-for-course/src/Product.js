import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div className="card">
            <div className="cards">
                <div className="card-item">{this.props.img}</div>
                <div className="card-item">{this.props.name}</div>
                <div className="card-item">{this.props.info}</div>
                <div className="card-item">{this.props.price}</div>
            </div>
            </div>
        )
    }
}

