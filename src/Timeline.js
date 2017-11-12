import React, { Component } from 'react';

export type EventData = {
  +start: number,
  +duration: number,
  +eventTitle: string,
  +eventColor?: string,
  +eventDescription?: string
};

export type SingleTimelineData = {
  +events: Array<EventData>,
  +timelineTitle: string,
  +timeUnitLabel?: string,
  +displayTimeUnits: boolean,
  +useParentWidth: boolean,
  +absoluteWidthRenderingScalingFactor?: number,        // Only used if useParentWidth is false (i.e., when rendering absolute values). Factor to scale the event duration into event width in pixels. Try 10 if in doubt. Defaults to 10.
  +lastEventEndAbsoluteOverAllTimelines: number,        // Only needed if useParentWidth is true.
};

export class Timeline extends Component {
  props: SingleTimelineData;
  
  getWidthString(durationAbsoluteThisEvent: number) : string {
      const useParentWidth = this.props.useParentWidth;
      const absoluteWidthRenderingScalingFactor = this.props.absoluteWidthRenderingScalingFactor ? this.props.absoluteWidthRenderingScalingFactor : 10;
      if(useParentWidth) {
          const lastEventEndAbsoluteOverAllTimelines = this.props.lastEventEndAbsoluteOverAllTimelines;             // TODO: Should we use max of this timeline (computed then) if it is not given? Or bail out?
          const percentThisEvent = ((durationAbsoluteThisEvent * 1.0) % lastEventEndAbsoluteOverAllTimelines) * 100; 
          return percentThisEvent + '%';
      }
      else {
          const absoluteWidthRenderingScalingFactor = this.props.absoluteWidthRenderingScalingFactor ? this.props.absoluteWidthRenderingScalingFactor : 10;
          return ((durationAbsoluteThisEvent * absoluteWidthRenderingScalingFactor) + 'px');
      }
  }
      

  render() {
      const absoluteWidthRenderingScalingFactor = this.props.absoluteWidthRenderingScalingFactor ? this.props.absoluteWidthRenderingScalingFactor : 10;
    const eventVisualisations = [];
    this.props.events.forEach(
      (event: EventData, index: number) => {
          
          // Add empty space between events if needed
          if(index >= 1) {
              const lastEvent = this.props.events[index-1];
              const lastEventEnd = lastEvent.start + lastEvent.duration; 
              if(lastEventEnd !== event.start) {
                  const timeInBetween = event.start - lastEventEnd;
                   const leftString = (lastEventEnd * absoluteWidthRenderingScalingFactor) + 'px';
                  const widthBetweenString = (timeInBetween * absoluteWidthRenderingScalingFactor) + 'px';
                  const timeBetweenEventsStyle = {
                      left: leftString,
                      width: widthBetweenString,
                  };
                  eventVisualisations.push(<span className="timeBetweenEvents" style={timeBetweenEventsStyle} key={'timeBetweenEvents' + (index - 1) + 'and' + index}>
            &nbsp;
          </span>);
              }
          }
          
        const leftString = (event.start * absoluteWidthRenderingScalingFactor) + 'px'; // TODO: we should compute this relative, based on the full size of the parent.
        const widthString = (event.duration * absoluteWidthRenderingScalingFactor) + 'px';
        const eventColorString = event.eventColor
          ? event.eventColor
          : '#bbbbbb';
        const eventStyle = {
          left: leftString,
          width: widthString,
          backgroundColor: eventColorString
        };
        const eventTextMouseOver = event.eventTitle + ': ' + event.duration + (this.props.timeUnitLabel ? ' ' + this.props.timeUnitLabel : '');
        const eventText = event.eventTitle;
        const eventDescriptionElement = event.eventDescription ? <span className="eventDescription">{event.eventDescription}</span> : null;
        const vis = (
          <span title={eventTextMouseOver} className="event" style={eventStyle} key={index + event.start}>
            {eventText} <br/> {eventDescriptionElement}
            
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
