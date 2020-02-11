import React, { Component } from 'react';
import Ingredients from './Ingredients';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="horizontal-rule"></div>
                <section>
                    <div id="recipe-heading">
                        <div id="title-div">
                            <h1>{this.props.recipeName}</h1>
                        </div>
                        <div id="subheading">
                            <span>Posted on {this.props.date} / {this.props.category}</span>
                            <div id="print">
                                <img src="./assets/main/print-icon.png" alt="" />
                                <span>Print</span>
                            </div>
                        </div>
                    </div>
                    <img src="./assets/main/choco-pizza.png" width="800px" alt="" />
                    <p>For the fig-swirl:  Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                    <p>Ice cream:  In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                    <p>Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.</p>
                </section>
                <section id="recipe-card">
                    <div className = "ingredient-list">
                    <label className = "checklist"><input type="checkbox" />1 1/2 cups milk</label>
                    <label className = "checklist"><input type="checkbox" />1/2 cup mascarpone</label>   
                    <label className = "checklist"><input type="checkbox" />1/2 tsp pink salt</label>    
                    <label className = "checklist"><input type="checkbox" />1 lb Black Mission Figs</label>  
                    <label className = "checklist"><input type="checkbox" />1/2 cup brown sugar</label>  
                    <label className = "checklist"><input type="checkbox" />2-4 tbsp water</label>   
                    </div>

                    <Ingredients />
                </section>

                <div className="horizontal-rule"></div>

                <section id = "author-section">
                    <div id= "author-div">
                        <div id = "author-img"><img src="./assets/footer/van-pic.png" alt="" /></div>
                        <div id = "author-bio"><h3>Vanessa Stevenson</h3>
                            <span>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
                        </div>
                    </div>
                    <button>Share Recipe</button>
                </section>
            </main>
        )
    }
}