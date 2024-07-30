import React,{Component } from "react";
import "../App.css"
export default class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className="card_body">
                    <img src="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png" alt="image"/>
                <h2 className="card_title">orange juice</h2>
                <p className="card_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel </p>
                    <p className="card_price">$5.03</p>
                    <button className="card_btn">View product</button>
                    <span className="card_price-off"> - % </span>
                </div>
            </div>
        );
    }

}