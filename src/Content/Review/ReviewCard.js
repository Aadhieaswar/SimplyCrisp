import Reatc, { Component } from 'react';

export default class ReviewCard extends Component {
    render() {
        return (
            <div class="card">
                <div className='card-header d-flex justify-content-between align-items-start'>
                    {this.props.Name}
                    <span class="badge bg-primary">{this.props.Rating}</span>
                </div>
                <div className='card-body'>
                    {this.props.Response}
                </div>
            </div>
        );
    }
}