import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactMultiTimeline } from './ReactMultiTimeline';

class App extends Component {
  render() {
    // Laura's room
    const room1_event1 = { start: 1, duration: 4, eventTitle: 'Esteban', eventColor: '#ff444466' };
    const room1_event2 = { start: 5, duration: 72, eventTitle: 'Laura', eventDescription: '12/2009 - 5/2016' };
    const room1_event3 = { start: 77, duration: 12, eventTitle: 'Hunni', eventDescription: '12/2009 - 5/2016' };
    const room1_event4 = { start: 89, duration: 4, eventTitle: 'Tim', eventDescription: '12/2009 - 5/2016' };
    const room1_event5 = { start: 93, duration: 4, eventTitle: 'Jelena', eventDescription: '12/2009 - 5/2016' };
    const roomLauraEvents = [room1_event1, room1_event2, room1_event3, room1_event4, room1_event5];

    // Tim's room
    const room2_event1 = { start: 1, duration: 88, eventTitle: 'Tim' };
    const room2_event2 = { start: 89, duration: 8, eventTitle: 'Sandra' };
    const room2_event3 = { start: 97, duration: 40, eventTitle: 'TestSack' };
    const roomTimEvents = [room2_event1, room2_event2, room2_event3];

    // guest room
    const room3_event1 = { start: 5, duration: 1, eventTitle: 'Anita' };
    const room3_event2 = { start: 15, duration: 4, eventTitle: 'Olivia' };
    const room3_event3 = { start: 21, duration: 4, eventTitle: 'Anna' };
    const room3_event6 = { start: 91, duration: 6, eventTitle: 'Malika' };
    const roomGuestEvents = [room3_event1, room3_event2, room3_event3, room3_event6];

    // Viola's room
    const room4_event1 = { start: 1, duration: 48, eventTitle: 'Viola' };
    const room4_event2 = { start: 49, duration:36, eventTitle: 'Daniel' };
    const room4_event3 = { start: 85, duration:6, eventTitle: 'Addis' };
    const room4_event4 = { start: 91, duration:6, eventTitle: 'Daniel' };
    const roomViolaEvents = [room4_event1, room4_event2, room4_event3, room4_event4];
    
    // Christoph's room
    const room5_event1 = { start: 1, duration: 24, eventTitle: 'Cara' };
    const room5_event2 = { start: 25, duration: 72, eventTitle: 'Christoph' };
    const roomChristophEvents = [room5_event1, room5_event2];
    
    // Jelena's room
    const room6_event1 = { start: 1, duration: 24, eventTitle: 'Christoph' };
    const room6_event2 = { start: 25, duration: 64, eventTitle: 'Jelena' };
    const room6_event3 = { start: 89, duration: 8, eventTitle: 'Giammarco' };
    const roomJelenaEvents = [room6_event1, room6_event2, room6_event3];

    const timelinesData = [
      { events: roomTimEvents, timelineTitle: "Tim's room" },
      { events: roomViolaEvents, timelineTitle: "Viola's room" },
      { events: roomGuestEvents, timelineTitle: "Guest room" },
      { events: roomLauraEvents, timelineTitle: "Laura's room" },
      { events: roomChristophEvents, timelineTitle: "Christoph's room" },
      { events: roomJelenaEvents, timelineTitle: "Jelena's room" }
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
          timeUnitLabel="months"
          absoluteWidthRenderingScalingFactor={10}
          useParentWidth={true}
        />
      </div>
    );
  }
}

export default App;
