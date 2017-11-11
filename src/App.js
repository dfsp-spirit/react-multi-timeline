import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactMultiTimeline } from './ReactMultiTimeline';

class App extends Component {
  render() {
    // Laura's room
    const room1_event1 = { start: 1, duration: 4, eventTitle: 'Esteban', eventColor: '#ff444466' };
    const room1_event2 = { start: 5, duration: 20, eventTitle: 'Laura' };
    const roomLauraEvents = [room1_event1, room1_event2];

    // Tim's room
    const room2_event1 = { start: 1, duration: 48, eventTitle: 'Tim' };
    const room2_event2 = { start: 49, duration: 8, eventTitle: 'Sandra' };
    const roomTimEvents = [room2_event1, room2_event2];

    // guest room
    const room3_event1 = { start: 5, duration: 1, eventTitle: 'Anita' };
    const room3_event2 = { start: 15, duration: 4, eventTitle: 'Olivia' };
    const roomGuestEvents = [room3_event1, room3_event2];

    // Viola's room
    const room4_event1 = { start: 1, duration: 42, eventTitle: 'Viola' };
    const room4_event2 = { start: 43, duration: 8, eventTitle: 'Daniel' };
    const roomViolaEvents = [room4_event1, room4_event2];

    const timelinesData = [
      { events: roomTimEvents, timelineTitle: "Tim's room" },
      { events: roomViolaEvents, timelineTitle: "Viola's room" },
      { events: roomGuestEvents, timelineTitle: "Guest room" },
      { events: roomLauraEvents, timelineTitle: "Laura's room" }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the react-multi-timline demo</h1>
        </header>
        <p className="App-intro">Checkout the example timeline below.</p>
        <ReactMultiTimeline
          width="small"
          title="WG Griesheim Raumbelegung"
          timelinesData={timelinesData}
        />
      </div>
    );
  }
}

export default App;
