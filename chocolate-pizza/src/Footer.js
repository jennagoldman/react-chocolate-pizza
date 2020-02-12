import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div id = "footer-logo">
                    <div id = "hr-left">
                        <hr className="inline" />
                    </div>
                    <img id ="footer-img" className="inline" src="./assets/footer/small-logo.png" alt="" />
                    <div id ="hr-right" >
                        <hr className="inline" />
                    </div>
                </div>
        
                <p>{this.props.name} &copy; {this.props.year} . All Rights Reserved.<br />
                Proudly published with {this.props.publisher}.</p>
            </footer>
        )
    }
}