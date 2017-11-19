import React, { Component } from 'react';
import { Timeline } from './Timeline';
import type { SingleTimelineData, EventData } from './Timeline';

type ReactMultiTimelineProps = {
  +timelinesData: Array<SingleTimelineData>,
  +width: 'small' | 'medium' | 'large',
  +title: string,
  +timeUnitLabel?: string,
  +absoluteWidthRenderingScalingFactor?: number,    // Scaling factor, only used for absolute rendering. Defaults to 10 if omitted (e.g., an event with duration 5 will have width of 50 pixels).
  +displayTimeUnits: boolean,           // Whether to display the duration in time units on mouse-over. Defaults to true.
  +useParentWidth: boolean,             // If this is set to true, the component will use 100% of the width of its parent, and compute the width of all events as a percentage of that width. If set to false, the widths will be computed absolute in pixels, where the duration is used. Defaults to true.
};

type ReactMultiTimelineState = {};

export class ReactMultiTimeline extends Component {
  props: ReactMultiTimelineProps;
  state: ReactMultiTimelineState;
  
  _onMouseMove(e: SyntheticEvent<>) {
	  const timelinesContainerPosition = this.refs.timelines.getBoundingClientRect();
	const positionRelativeToTimelinesX = e.clientX - this.refs.timelines.offsetLeft; // = e.nativeEvent.offsetX;		// get mouse pointer relative to timelines component.
	const eventsAtTime = this.getEventsAtAbsoluteTimepoint(positionRelativeToTimelinesX);	// compute all events which happened at the current time point
	//console.log("There are " + eventsAtTime.length + " events happening at time point " + positionRelativeToTimelinesX + ". timelinesContainerPosition=%o", timelinesContainerPosition);
	// TODO: change border color of the respective timeline events here
  }
  
  _onMouseLeave(e: SyntheticEvent<>) {
	console.log("Mouse left timeline container, time to reset.");
	// TODO: reset border color of all timeline events here
  }
  
  getEventsAtAbsoluteTimepoint(time: number): Array<EventData> {
	  let eventsAtTimeAllTimelines = [];
	  const timelinesData = this.props.timelinesData;
	  timelinesData.forEach((timelineData: SingleTimelineData) => {
        const events = timelineData.events;
		const eventsAtTimeThisTimeline = events.filter((event) => { 
			return event.start <= time && (event.start + event.duration) > time;
		});
		eventsAtTimeAllTimelines = eventsAtTimeAllTimelines.concat(eventsAtTimeThisTimeline);
	  });
	  return eventsAtTimeAllTimelines;
  }
  
  determineLastEventEndAbsolute(): number {
      const timelinesData = this.props.timelinesData;
      const useParentWidth = (this.props.useParentWidth === false ? false : true);
      
      let lastEventEndAbsoluteOverAllTimelines = 0;
    timelinesData.forEach((timelineData: SingleTimelineData) => {
        const events = timelineData.events;
          const lastEventEndAbsoluteThisTimeline = Math.max.apply(Math, events.map((event: EventData) => {return event.start + event.duration;}));
          if(lastEventEndAbsoluteThisTimeline > lastEventEndAbsoluteOverAllTimelines) {
              lastEventEndAbsoluteOverAllTimelines = lastEventEndAbsoluteThisTimeline;
          }
    });
    // prevent division by zero errors later
    if(lastEventEndAbsoluteOverAllTimelines === 0 && useParentWidth && timelinesData.length > 0) {
        // we have timelines, but none of them have any events with length at least 1.
        console.warn("None of the " + timelinesData.length + " timelines have a total duration of at least 1 time unit over all their events.");
        lastEventEndAbsoluteOverAllTimelines = 1;       // prevent division by zero when computing relative length of events. Maybe we should rather do this in the timelines?
    }
    console.log("Last event over all timelines ends at " + lastEventEndAbsoluteOverAllTimelines + ".");
    return lastEventEndAbsoluteOverAllTimelines;
  }
  
  computeTimelines() {
      const timelinesData = this.props.timelinesData;
    const useParentWidth = (this.props.useParentWidth === false ? false : true);
    
    // determine the end of the last event over all timelines
    const lastEventEndAbsoluteOverAllTimelines = this.determineLastEventEndAbsolute();
    
    
    const timelines = timelinesData.map(
      (tData: SingleTimelineData, index: number) => {
        return (
          <Timeline
            timelineTitle={tData.timelineTitle ? tData.timelineTitle : 'Timeline #' + index }
            events={tData.events}
            spaceAfterTimeline={tData.spaceAfterTimeline ? tData.spaceAfterTimeline : 'default'}
            key={index + tData.timelineTitle}
            displayTimeUnits={this.props.displayTimeUnits === false ? false : true}
            timeUnitLabel={this.props.timeUnitLabel ? this.props.timeUnitLabel : ''}
            useParentWidth={useParentWidth}
            lastEventEndAbsoluteOverAllTimelines={lastEventEndAbsoluteOverAllTimelines}
            absoluteWidthRenderingScalingFactor={this.props.absoluteWidthRenderingScalingFactor}
          />
        );
      }
    );
    return timelines;
  }

  render() {
      
      const timelines = this.computeTimelines();
    

    return (
      <div className="react-multi-timeline">
        <div className="timeline-outer-container-fixed-width">
        <div className="multi-timeline-title-container">
              <div className="multi-timeline-title">{this.props.title}</div>
          </div>
          <div ref="timelines" className="timeline-inner-container-scrolling" onMouseMove={this._onMouseMove.bind(this)} onMouseLeave={this._onMouseLeave.bind(this)}>{timelines}</div>
        </div>
      </div>
    );
  }
}
