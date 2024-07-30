import React,{Component } from "react";
import "../App.css"
export default class Card extends Component {

    render() {
        const {img, title, description,price, off} = this.props
        return (
            <div className="card">
                <div className="card_body">
                    <img src={img}/>
                <h2 className="card_title">{title}</h2>
                <p className="card_description">{description}</p>
                    <p className="card_price">{price}</p>
                    <button className="card_btn">View product</button>
                    <span className="card_price-off">{off}</span>
                </div>
            </div>
        );
    }

}