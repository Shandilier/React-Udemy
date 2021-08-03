import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Service extends Component {

    constructor(props){
        super(props);
        this.state={
            services: [
                {
                    icon: <FaCocktail/>,
                    title: "Free Cocktail",
                    info: "The best deal for soft drinks"
                },
                {
                    icon: <FaHiking/>,
                    title: "Endless hiking",
                    info: "Best deal for hiking including some other sports"
                },
                {
                    icon: <FaShuttleVan/>,
                    title: "Free Shuttle",
                    info: "Ain't it the best deal ?"
                },
                {
                    icon: <FaBeer/>,
                    title: "Strongest beer",
                    info: "Explore the best beer collection"
                }
                
            ]
        }
    }
    render() {
        return (
            <section className="services">
                <Title title="Services">
                </Title>
                <div className="services-center">
                        {this.state.services.map((item,index)=>{
                            return (
                                <div>
                                    <article key = {index} className="service">
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                        </article>
                                </div>
                            );
                        })}
                    </div>
            </section>
        )
    }
}
