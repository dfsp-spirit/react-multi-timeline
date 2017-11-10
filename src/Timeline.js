import React, { Component } from 'react';

export type EventData = {
	+startIndex: number,
	+duration: number,
    +eventTitle: string,
	+eventColor?: string
};

export type SingleTimelineData = {
    +events: Array<EventData>,
    +timelineTitle: string
}

export class Timeline extends Component {
    props: SingleTimelineData;
    
    render() {
        return(
            <div className="Timeline">{this.props.timelineTitle}</div>  
        );
    }
}
