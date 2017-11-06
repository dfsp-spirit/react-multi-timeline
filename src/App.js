import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timeline} from './Timeline';
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



type ReactMultiTimelineProps = {
    timelinesData: Array<SingleTimelineData>,
    width: 'small' | 'medium' | 'large',
    title: string
};

type ReactMultiTimelineState = {
};


class ReactMultiTimeline extends Component {
    props: ReactMultiTimelineProps;
    state: ReactMultiTimelineState;
    
    render() {
        
        const timelinesData = this.props.timelinesData;
        const timelines = timelinesData.map((tData: SingleTimelineData, index: number) => {
            return <div><Timeline title={"Timeline #" + index + ": " + tData.title}/></div>;
        });
        
        return (
            <div className="react-multi-timeline">
                <div className="timeline-outer-container-fixed-width">
                    <div className="multi-timeline-title">{this.props.title}</div>
                    <div className="timeline-inner-container-scrolling">
                        {timelines}
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
