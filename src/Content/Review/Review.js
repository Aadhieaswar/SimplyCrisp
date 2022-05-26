import React, { Component } from "react";
import ReviewCard from "./ReviewCard";
import Reviews from "./ReviewData.json";

export default class Review extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [...Reviews]
        }
    }

    render() {
        return (
            <div className="content">
                { this.state.reviews.map((item, index) => {
                    return (<ReviewCard key={index} {...item} />);
                }) }
            </div>
        )
    }
}