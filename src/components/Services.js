import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from './Title'

export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor deleniti, at quam labore cumque, facilis ullam unde magnam accusamus quod officia laborum rem dolorum quaerat iusto nulla, praesentium veniam.'
      },
      {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor deleniti, at quam labore cumque, facilis ullam unde magnam accusamus quod officia laborum rem dolorum quaerat iusto nulla, praesentium veniam.'
      },
      {
        icon:<FaShuttleVan/>,
        title:"Free Shuttle",
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor deleniti, at quam labore cumque, facilis ullam unde magnam accusamus quod officia laborum rem dolorum quaerat iusto nulla, praesentium veniam.'
      },
      {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor deleniti, at quam labore cumque, facilis ullam unde magnam accusamus quod officia laborum rem dolorum quaerat iusto nulla, praesentium veniam.'
      }            
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>

          })}
        </div>
        
      </section>
    )
  }
}
