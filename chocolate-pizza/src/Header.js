import React, { Component } from 'react';
import Logo from './Logo';
import Social from './Social';

export default class Header extends Component {
    render() {

        return (
            <header>
                <Logo name={this.props.name} tagline={this.props.tagline} logo={this.props.logo}/>
                <Social />
            </header>
        )
    }
}