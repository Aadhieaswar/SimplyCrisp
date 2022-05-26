import React, { Component } from "react";
import ReviewCard from "./ReviewCard";

export default class Review extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [ 
                {
                    Name: 'Jon Doe',
                    Rating: 5,
                    Response: 'It was the worst thing in my life! Ready to kms'
                }
            ]
        }
    }

    render() {
        return (
            <div className="content">
                { this.state.reviews.map((item, index) => {
                    return (<ReviewCard Key={index} {...item} />);
                }) }
            </div>
        )
    }
}