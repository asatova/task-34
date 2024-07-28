import React, { Component } from "react";
import Product from "./Product";

class App extends Component {
    render() {
        return (
            <div>
                <Product name="Zero to One"
                         info="Optimist"
                         price="7.9" />
                <Product name="two"
                         info="Optimist"
                         price="7.9" />
                <Product name="three"
                         info="Optimist"
                         price="7.9" />
            </div>
        );
    }
}

export default App;
