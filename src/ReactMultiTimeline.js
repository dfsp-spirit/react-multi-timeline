import React, { Component } from 'react';
import { Timeline } from './Timeline';
import type { SingleTimelineData } from './Timeline';

type ReactMultiTimelineProps = {
  +timelinesData: Array<SingleTimelineData>,
  +width: 'small' | 'medium' | 'large',
  +title: string,
  +timeUnitLabel?: string
};

type ReactMultiTimelineState = {};

export class ReactMultiTimeline extends Component {
  props: ReactMultiTimelineProps;
  state: ReactMultiTimelineState;

  render() {
    const timelinesData = this.props.timelinesData;
    const timelines = timelinesData.map(
      (tData: SingleTimelineData, index: number) => {
        return (
          <Timeline
            timelineTitle={tData.timelineTitle ? tData.timelineTitle : 'Timeline #' + index }
            events={tData.events}
            key={index + tData.timelineTitle}
            timeUnitLabel={this.props.timeUnitLabel ? this.props.timeUnitLabel : ''}
          />
        );
      }
    );

    return (
      <div className="react-multi-timeline">
        <div className="timeline-outer-container-fixed-width">
        <div className="multi-timeline-title-container">
              <div className="multi-timeline-title">{this.props.title}</div>
          </div>
          <div className="timeline-inner-container-scrolling">{timelines}</div>
        </div>
      </div>
    );
  }
}
