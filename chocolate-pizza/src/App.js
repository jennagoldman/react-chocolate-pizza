import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

const siteInfo = {
    name: 'Delicious',
    tagline: 'The best food blog on the web.',
    year: 2013,
    publisher: 'Ghost',
    logo: './assets/header/logo.png'
}

export default class App extends Component {
    render() {

        const recipe = {
            name: 'Chocolate Pizza',
            postedDate: '15 Dec 2013',
            category: 'Desserts',
        }

        return (
            <div className="App">
                <Header name={siteInfo.name} tagline={siteInfo.tagline} logo={siteInfo.logo} />
                
                <Main recipeName={recipe.name} date={recipe.postedDate} category={recipe.category} />

                <Footer name={siteInfo.name} year={siteInfo.year} publisher={siteInfo.publisher}/>
            </div>
        );
    }
}
