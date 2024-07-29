import React, { Component } from "react";
import Product from "./Product";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="main-flex">
                <Product
                    key="1"
                    img src="./images/3.png"
                    name="Orange Juice"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae"
                    price="$ 7.9"
                />
                <Product
                    key="2"
                    img src="./images/3.png"
                    name="Banana Juice"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae"
                    price="$ 2.9"
                />
                <Product
                    key="3"
                    img src="./images/3.png"
                    name="Avocado Juice"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae"
                    price="$ 4.8"
                />
                <Product
                    key="4"
                    img src="./images/3.png"
                    name="Lemon Juice"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae"
                    price="$ 5.9"
                />
                <Product
                    key="5"
                    img src="./images/3.png"
                    name="Banana Juice"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae"
                    price="$ 2.9"
                />
                <Product
                    key="6"
                    img src="./images/3.png"
                    name="Avocado Juice"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae"
                    price="$ 4.8"
                />
            </div>
        );
    }
}

export default App;
