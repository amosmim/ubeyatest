import React, { Component } from 'react';

export class News extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='News-box'>
                <h3>Title</h3>
                <p>{this.props.title}</p>
                <h3>description</h3>
                <p>{this.props.description}</p>
                <h3>image</h3>
                <img src={this.props.image} />
                <h3>link</h3>
                <p>{this.props.link}</p>
                <h3>date</h3>
                <p>{this.props.date}</p>
            </div>

        );
    }
}