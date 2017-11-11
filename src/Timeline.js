import React, { Component } from 'react';

export type SingleTimelineData = {
    events: Array<TimeLineEventData>,
    title: string
}

export type TimeLineEventData = {
};

export class Timeline extends Component {
    props: SingleTimelineData;
    
    render() {
        return(
            <div className="Timeline">{this.props.title}</div>  
        );
    }
}
