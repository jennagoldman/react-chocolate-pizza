import React, { Component } from 'react';

export default class Ingredients extends Component {
    render() {
        return (
            <div className = "ingredient-list">
                <label className = "checklist"><input type="checkbox" />1 1/2 cups heavy cream</label>   
                <label className = "checklist"><input type="checkbox" /><span className = "line-through">1/3 granulated sugar</span></label> 
                <label className = "checklist"><input type="checkbox" /><span className = "line-through">2 egg yolks</span></label>  

                <label className = "checklist"><input type="checkbox" />1 lemon, juiced</label> 
                <label className = "checklist"><input type="checkbox" />2 tbsp butter</label> 
                <label className = "checklist"><input type="checkbox" />1 cup honey roasted pecans, roughly chopped</label> 
        </div>
        )
    }
}