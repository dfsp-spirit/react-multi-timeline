import React, { Component } from 'react';

export type EventData = {
  +start: number,
  +duration: number,
  +eventTitle: string,
  +eventColor?: string
};

export type SingleTimelineData = {
  +events: Array<EventData>,
  +timelineTitle: string,
  +timeUnitLabel?: string
};

export class Timeline extends Component {
  props: SingleTimelineData;

  render() {
    const eventVisualisations = [];
    this.props.events.forEach(
      (event: EventData, index: number) => {
          
          if(index >= 1) {
              const lastEvent = this.props.events[index-1];
              const lastEventEnd = lastEvent.start + lastEvent.duration; 
              if(lastEventEnd !== event.start) {
                  const timeInBetween = event.start - lastEventEnd;
                   const leftString = (lastEventEnd * 10) + 'px';
                  const widthBetweenString = (timeInBetween * 10) + 'px';
                  const timeBetweenEventsStyle = {
                      left: leftString,
                      width: widthBetweenString,
                  };
                  eventVisualisations.push(<span className="timeBetweenEvents" style={timeBetweenEventsStyle} key={'timeBetweenEvents' + (index - 1) + 'and' + index}>
            &nbsp;
          </span>);
              }
          }
          
        const leftString = (event.start * 10) + 'px'; // TODO: we should compute this relative, based on the full size of the parent.
        const widthString = (event.duration * 10) + 'px';
        const eventColorString = event.eventColor
          ? event.eventColor
          : 'gray';
        const eventStyle = {
          left: leftString,
          width: widthString,
          backgroundColor: eventColorString
        };
        const eventText = event.eventTitle + ': ' + event.duration;
        const vis = (
          <span title={eventText} className="event" style={eventStyle} key={index + event.start}>
            {eventText}
          </span>
        );
        eventVisualisations.push(vis);
      }
    );

    return (
      <div className="timeline">
        <div className="timeline-title">{this.props.timelineTitle}</div>
        <div className="timeline-visualization">{eventVisualisations}</div>
      </div>
    );
  }
}
