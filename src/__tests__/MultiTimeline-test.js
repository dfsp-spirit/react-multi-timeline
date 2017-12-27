import React from 'react';
import {shallow, render, mount } from 'enzyme';
import { Timeline } from '../Timeline';
import { ReactMultiTimeline } from '../ReactMultiTimeline';

let componentInstance;

const countEvents = function () {
    return componentInstance.find('span.event').length;
};

const countTimelines = function () {
    return componentInstance.find('div.timeline').length;
};

const countMultiTimelines = function () {
    return componentInstance.find('div.react-multi-timeline').length;
};


describe('A multi timeline with two sub timelines renders as expected.', function () {

  const eventListT1 = [{ start: 5, duration: 5, eventTitle: 'S1E1' }, { start: 15, duration: 15, eventTitle: 'S1E2' }];
  const eventListT2 = [{ start: 1, duration: 5, eventTitle: 'S2E1' }, { start: 20, duration: 10, eventTitle: 'S2E2' }];
  const timelinesData = [
    { events: eventListT1, timelineTitle: "Sub Timeline 1" },
    { events: eventListT2, timelineTitle: "Sub Timeline 2" }
  ];
  
  beforeEach(function () {
    const component = <ReactMultiTimeline
    width="small"
    title="Multi Timeline with two sub timelines"
    timelinesData={timelinesData}
    timeUnitLabel="years"
    absoluteWidthRenderingScalingFactor={10}
    useParentWidth={true}
  />;
    componentInstance = mount(component);
  });  
  
  it('Contains one multi timeline', function () {
    expect(countMultiTimelines()).toBe(1);
  });

  it('Contains two timelines', function () {
    expect(countTimelines()).toBe(2);
  });

  it('Contains four events', function () {
    expect(countEvents()).toBe(4);
  });

});
