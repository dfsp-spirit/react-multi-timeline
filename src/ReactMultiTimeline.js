import React, { Component } from 'react';
import {Timeline} from './Timeline';
import type {SingleTimelineData} from './Timeline';

type ReactMultiTimelineProps = {
    timelinesData: Array<SingleTimelineData>,
    width: 'small' | 'medium' | 'large',
    title: string
};

type ReactMultiTimelineState = {
};


export class ReactMultiTimeline extends Component {
    props: ReactMultiTimelineProps;
    state: ReactMultiTimelineState;
    
    render() {
        
        const timelinesData = this.props.timelinesData;
        const timelines = timelinesData.map((tData: SingleTimelineData, index: number) => {
            return <div><Timeline title={"Timeline #" + index + ": " + tData.title}/></div>;
        });
        
        return (
            <div className="react-multi-timeline">
                <div className="timeline-outer-container-fixed-width">
                    <div className="multi-timeline-title">{this.props.title}</div>
                    <div className="timeline-inner-container-scrolling">
                        {timelines}
                    </div>
                </div>
            </div>
        );
    }
}
