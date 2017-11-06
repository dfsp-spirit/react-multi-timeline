import React, { Component } from 'react';

export type SingleTimelineData = {
    events: Array<Object>,
    title: string
}

export class Timeline extends Component {
    props: SingleTimelineData;
    
    render() {
        return(
            <div className="Timeline">{this.props.title}</div>  
        );
    }
}
