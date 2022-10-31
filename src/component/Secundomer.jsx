import React, { Component } from "react";

class Secundomer extends Component {
  state = {
    hour: 0,
    minute: 0,
    secound: 0,
    interval: "",
    intervalitem: [],
  };
  startbtn = () => {
    let inter = setInterval(() => {
      if (this.state.secound < 59) {
        let a = this.state.secound + 1;
        this.setState({
          secound: a,
        });
      } else if (this.state.minute < 59) {
        let b = this.state.minute + 1;
        this.setState({
          minute: b,
          secound: 0,
        });
      } else {
        let c = this.state.hour + 1;
        this.setState({
          hour: c,
          minute: 0,
          secound: 0,
        });
      }
    }, 100);
    this.setState({
      interval: inter,
    });
  };

  stopbtn = () => {
    clearInterval(this.state.interval);
  };
  clearbtn = () => {
    clearInterval(this.state.interval);
    this.setState({
      minute: 0,
      hour: 0,
      secound: 0,
      intervalitem:[]
    });
  };
  intervalbtn = () => {
    let data = this.state.intervalitem;
    let obj = {
      hour: this.state.hour,
      minute: this.state.minute,
      secound: this.state.secound,
    };
    data.push(obj);
  };

  render() {
    const { hour, minute, secound } = this.state;
    return (
      <div>
        <div className="timer">
          <button>+</button>
          <h1>{hour}</h1>
          <button>-</button>
          <button>+</button>
          <h1>{minute}</h1>
          <button>-</button>
          <button>+</button>
          <h1>{secound}</h1>
          <button>-</button>
        </div>
        <div className="btn">
          <button onClick={this.startbtn}>start</button>
          <button onClick={this.stopbtn}>stop</button>
          <button onClick={this.intervalbtn}>inerval</button>
          <button onClick={this.clearbtn}>clear</button>
        </div>
        <div className="intervals">
          {this.state.intervalitem.map((item, index) => (
             <h1>{item.hour} : {item.minute} : {item.secound}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default Secundomer;
