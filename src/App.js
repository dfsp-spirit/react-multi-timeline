import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactMultiTimeline } from './ReactMultiTimeline';

class App extends Component {
  render() {
    // Laura's room
    const room1_event1 = { start: 1, duration: 4, eventTitle: 'Esteban', eventDescription: '08/2009 - 11/2009', eventColor: '#ff444466' };
    const room1_event2 = { start: 5, duration: 72, eventTitle: 'Laura', eventDescription: '12/2009 - 5/2016', eventColor: '#a4d2df' };
    const room1_event3 = { start: 77, duration: 12, eventTitle: 'Hunni', eventDescription: '12/2009 - 5/2016', eventColor: '#f0fff0' };
    const room1_event4 = { start: 89, duration: 4, eventTitle: 'Tim', eventDescription: '12/2009 - 5/2016', eventColor: '#e6e6fa' };
    const room1_event5 = { start: 93, duration: 4, eventTitle: 'Jelena', eventDescription: '12/2009 - 5/2016', eventColor: '#ffe4e1' };
    const roomLauraEvents = [room1_event1, room1_event2, room1_event3, room1_event4, room1_event5];

    // Tim's room
    const room2_event1 = { start: 1, duration: 88, eventTitle: 'Tim', eventColor: '#e6e6fa' };
    const room2_event2 = { start: 89, duration: 8, eventTitle: 'Sandra' };
    const room2_event3 = { start: 97, duration: 40, eventTitle: 'TestSack' };
    const roomTimEvents = [room2_event1, room2_event2, room2_event3];

    // guest room
    const room3_event1 = { start: 8, duration: 3, eventTitle: 'Anita' };
    const room3_event2 = { start: 15, duration: 4, eventTitle: 'Olivia', eventColor: '#fffacd' };
    const room3_event3 = { start: 21, duration: 4, eventTitle: 'Anna' };
	const room3_event4 = { start: 31, duration: 3, eventTitle: 'Horacio' };
	const room3_event5 = { start: 55, duration: 3, eventTitle: 'Hendrik' };
    const room3_event6 = { start: 91, duration: 6, eventTitle: 'Malika' };
    const roomGuestEvents = [room3_event1, room3_event2, room3_event3, room3_event4, room3_event5, room3_event6];

    // Viola's room
    const room4_event1 = { start: 1, duration: 48, eventTitle: 'Viola' };
    const room4_event2 = { start: 49, duration:36, eventTitle: 'Daniel', eventColor: '#ffdead' };
    const room4_event3 = { start: 85, duration:6, eventTitle: 'Addis' };
    const room4_event4 = { start: 91, duration:6, eventTitle: 'Daniel', eventColor: '#ffdead' };
    const roomViolaEvents = [room4_event1, room4_event2, room4_event3, room4_event4];
    
    // Christoph's room
    const room5_event0 = { start: 1, duration: 6, eventTitle: 'Pia' };
	const room5_event1 = { start: 7, duration: 18, eventTitle: 'Cara' };
    const room5_event2 = { start: 25, duration: 72, eventTitle: 'Christoph', eventColor: '#fff0f5' };
    const roomChristophEvents = [room5_event0, room5_event1, room5_event2];
    
    // Jelena's room
    const room6_event1 = { start: 1, duration: 24, eventTitle: 'Christoph', eventColor: '#fff0f5' };
    const room6_event2 = { start: 25, duration: 64, eventTitle: 'Jelena', eventColor: '#ffe4e1' };
    const room6_event3 = { start: 89, duration: 8, eventTitle: 'Giammarco' };
    const roomJelenaEvents = [room6_event1, room6_event2, room6_event3];
    
    // Olivia's room
    const room7_event1 = { start: 1, duration: 27, eventTitle: 'Olivia', eventColor: '#fffacd' };
    const room7_event2 = { start: 28, duration: 56, eventTitle: 'Marie' };
    const room7_event3 = { start: 84, duration: 5, eventTitle: 'Maren' };
    const room7_event4 = { start: 89, duration: 8, eventTitle: 'Hunni', eventColor: '#f0fff0' };
    const roomOliviaEvents = [room7_event1, room7_event2, room7_event3, room7_event4];
    
    // Philipp's room
    const room8_event1 = { start: 1, duration: 24, eventTitle: 'Philipp' };
    const room8_event2 = { start: 25, duration: 64, eventTitle: 'Jan' };
    const room8_event3 = { start: 89, duration: 8, eventTitle: 'Laura', eventColor:'#a4d2df' };
    const roomPhilippEvents = [room8_event1, room8_event2, room8_event3];
    

    const timelinesData = [
      { events: roomLauraEvents, timelineTitle: "Obere Etage, linkes Zimmer (neben Bad)" },
      { events: roomChristophEvents, timelineTitle: "Obere Etage, mittleres Zimmer" },
      { events: roomJelenaEvents, timelineTitle: "Obere Etage, rechtes Zimmer (neben Treppe zum Wohnzimmer)", spaceAfterTimeline: 'larger' },
      { events: roomGuestEvents, timelineTitle: "Mittlere Ebene, linkes Zimmer (Gästezimmer)" },      
      { events: roomViolaEvents, timelineTitle: "Mittlere Ebene, mittleres Zimmer" },
      { events: roomTimEvents, timelineTitle: "Mittlere Ebene, rechtes Zimmer (neben Küche)", spaceAfterTimeline: 'larger' },
      { events: roomOliviaEvents, timelineTitle: "Untere Wohnung, linkes Zimmer" },
      { events: roomPhilippEvents, timelineTitle: "Untere Wohnung, rechtes Zimmer (neben Küche)" },
      
      
      
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
