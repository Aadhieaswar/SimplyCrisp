import React, { Component } from "react";

export default class Purchase extends Component {
    render() {
        return (
            <div className="content text-center">
                <img src="/boiled-peanut-salad.jpg" alt="boiled penut salad" width="300" />

                <div className="blockquote h1">
                Peanut Salsa
                    <div className="item-cost">
                        300g for $3.99
                    </div>
                </div>
                
            </div>
        )
    }
}