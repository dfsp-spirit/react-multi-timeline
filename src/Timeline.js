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
      if(durationAbsoluteThisEvent <= 0) {
          console.warn("Computed absolute duration of event in input data is " + durationAbsoluteThisEvent + ". Skipping visualization of this event. Please check input data. Do you have overlapping events?");
          return '0';
      }
      const useParentWidth = this.props.useParentWidth;
      if(useParentWidth) {
          const lastEventEndAbsoluteOverAllTimelines = this.props.lastEventEndAbsoluteOverAllTimelines;             // TODO: Should we use max of this timeline (computed then) if it is not given? Or bail out?
          const percentThisEvent = Math.floor(((durationAbsoluteThisEvent * 1.0) / lastEventEndAbsoluteOverAllTimelines) * 95); 
          //console.log("Width % for event with absolute duration " + durationAbsoluteThisEvent + " is " +  percentThisEvent + ". lastEventEndAbsoluteOverAllTimelines=" + lastEventEndAbsoluteOverAllTimelines);
          return percentThisEvent + '%';
      }
      else {
          const absoluteWidthRenderingScalingFactor = this.props.absoluteWidthRenderingScalingFactor ? this.props.absoluteWidthRenderingScalingFactor : 10;
          return ((durationAbsoluteThisEvent * absoluteWidthRenderingScalingFactor) + 'px');
      }
  }
      

  render() {
    const eventVisualisations = [];
    this.props.events.forEach(
      (event: EventData, index: number) => {
		  
		  // Add empty space between events if needed
		  let lastEventEnd = 1;
		  if(index === 0) {
			  if(lastEventEnd > event.start) {
                  console.warn("Timeline '" + this.props.timelineTitle + "': The first event must not start earlier than at timepoint 1.");
              }
		  }
          else if(index >= 1) {
              const lastEvent = this.props.events[index-1];
              lastEventEnd = lastEvent.start + lastEvent.duration;
			  if(lastEventEnd > event.start) {
                  console.warn("Timeline '" + this.props.timelineTitle + "': Events #" + (index-1) + " and #" + index + " overlap and/or are in wrong order. Check input data.");
              }
		  }
              
              if(lastEventEnd !== event.start) {
                  const timeInBetween = event.start - lastEventEnd;
                  const widthBetweenString = this.getWidthString(timeInBetween);
                  const timeBetweenEventsStyle = {
                      width: widthBetweenString,
                  };
                  eventVisualisations.push(<span className="timeBetweenEvents event-like" style={timeBetweenEventsStyle} key={'timeBetweenEvents' + (index - 1) + 'and' + index}>
            &nbsp;
          </span>);
              }
          
          
        const widthString = this.getWidthString(event.duration);
        const eventColorString = event.eventColor
          ? event.eventColor
          : '#bbbbbb';
        const eventStyle = {
          width: widthString,
          backgroundColor: eventColorString
        };
        
        // Generate the string to display on mouse-over
        const displayTimeUnits = this.props.displayTimeUnits;
        const eventDescriptionMouseOver = event.eventDescription ? ': ' + event.eventDescription : '';
        const timeUnitStringMouseOver = displayTimeUnits ?  ' (' + event.duration + (this.props.timeUnitLabel ? ' ' + this.props.timeUnitLabel : '') + ')' : '';
        const eventText = event.eventTitle ? event.eventTitle : '';
        const eventTextMouseOver = eventText + eventDescriptionMouseOver + timeUnitStringMouseOver;
        
        const eventDescriptionElement = event.eventDescription ? <span className="eventDescription">{event.eventDescription}</span> : null;
        const vis = (
          <span title={eventTextMouseOver} className="event event-like" style={eventStyle} key={index + event.start}>
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
