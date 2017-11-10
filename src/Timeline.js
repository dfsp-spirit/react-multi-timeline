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
}

export class Timeline extends Component {
    props: SingleTimelineData;
	
	const eventVisualisations = this.props.events.map((event: EventData) => {
		const widthString = event.duration + 'px';
		const eventColorString = this.props.eventColor ? this.props.eventColor : 'gray';
		const eventStyle = {
			'width': widthString,
			'backgroundColor': eventColorString
		};
		const eventText = "[" + event.eventTitle + ": " + event.duration + "]";
		const vis = <span className="event" style={eventStyle}>{eventText}</span>;
		return vis; 
	});
    
    render() {
        return(
            <div className="timeline">
			    <div className="timeline-title">
				    {this.props.timelineTitle}
				</div>
				<div className="timeline-visualization">
				</div>
			</div>  
        );
    }
}
