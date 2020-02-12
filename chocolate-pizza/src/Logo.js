import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div id="logo-group">
                <div id="logo-image">
                    <img src={this.props.logo} alt="blog logo" />
                </div>
                <div id="logo-name">
                    <h2>{this.props.name}</h2>
                    <span id="subtitle">{this.props.tagline}</span>
                </div>
            </div>
        )
    }
}

