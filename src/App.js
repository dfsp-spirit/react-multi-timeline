import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timeline} from './Timeline';
import {ReactMultiTimeline} from './ReactMultiTimeline';
import type {SingleTimelineData} from './Timeline';


class App extends Component {
  render() {
    const event1 = {
		start: 10,
		duration: 3,
		eventTitle: 'Esteban'
	};
    const timelinesData = [{events: [], timelineTitle: "Timeline A"}, {events: [], timelineTitle: "Timeline B"}, {events: [], timelineTitle: "Timeline C"}];
      
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Here is a timeline:</p>
        <ReactMultiTimeline width="small" title="My timeline" timelinesData={timelinesData}/>
      </div>
    );
  }
}





export default App;
