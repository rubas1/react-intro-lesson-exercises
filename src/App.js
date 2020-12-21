import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return "Hello"
  }

  getMorningGreeting() {
    return <p>Good Morning!</p>
  }

  getEveningGreeting() {
    return <p>Good Evening!</p>
  }

  showCompany(name, revenue) {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    let text
    if(temperature < 15){
      text = "freezing"
    }
    if(temperature >= 15 && temperature <= 30){
      text = "fair"
    }
    if(temperature > 30){
      text = "hell-scape"
    }
    return <div id="weatherBox" className={text}></div>
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    let time = new Date().getHours()
    let text = this.getStuff()
    /*return [
      this.getMorningGreeting(),
      this.getEveningGreeting(),
      <p>some text</p>
    ]*/

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
          <h4>{text}</h4 >
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(c => this.showCompany(c.name, c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(40)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
