import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timeline} from './Timeline';
import {ReactMultiTimeline} from './ReactMultiTimeline';
import type {SingleTimelineData} from './Timeline';


class App extends Component {
  render() {
      
      const timelinesData = [{events: [], title: "Timeline A"}, {events: [], title: "Timeline B"}, {events: [], title: "Timeline C"}];
      
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
