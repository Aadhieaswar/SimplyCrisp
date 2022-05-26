import React, { Component } from 'react';

export default class ReviewCard extends Component {
    render() {
        return (
            <div className="card mt-3 border-warning">
                <div className="card-header d-flex justify-content-between align-items-start border-warning h5">
                    {this.props.Name}
                    <span className="badge bg-primary">{this.props.Rating}</span>
                </div>
                <div className="card-body">
                    {this.props.Response}
                </div>
            </div>
        );
    }
}