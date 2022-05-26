import React, { Component } from "react";
import Tabs from "../Layout/Tabs/Tabs";
import Review from "./Review/Review";
import Purchase from "./Purchase/Purchase";

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: {
                'Reviews': true,
                'Purchase': false
            }
        }
    }

    toggleTabState = (tab) => {
        let tabs = this.state.tabs;

        for (let t in tabs) {
            tabs[t] = (t === tab);
        }
        this.setState({ tabs: tabs });
    }

    render() {
        return (
            <div className="container content">
                <Tabs tabList={this.state.tabs} toggleTab={this.toggleTabState} />

                {
                    this.state.tabs['Reviews'] ? <Review /> : 
                    this.state.tabs['Purchase'] ? <Purchase /> : undefined
                }
            </div>
        )
    }
}