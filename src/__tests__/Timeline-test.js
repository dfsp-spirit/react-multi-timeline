import React from 'react';
import {shallow, render, mount } from 'enzyme';
import { Timeline } from '../Timeline';

describe('Test timeline with a single event that starts after time point zero', function () {

  let componentInstance;

  beforeEach(function () {
    const component = <Timeline
    timelineTitle="Timeline"
    events={[{eventTitle: 'event1', start: 5, duration: 10}]}
    displayTimeUnits={true}
    timeUnitLabel="months"
    useParentWidth={true}
    lastEventEndAbsoluteOverAllTimelines={10}
    />;
    componentInstance = mount(component);
  });


  const countDivs = function () {
    return componentInstance.find('div').length;
  };

  const countEvents = function () {
    return componentInstance.find('span.event').length;
  };

  const countTimeBetweenEvents = function () {
    return componentInstance.find('span.timeBetweenEvents').length;
  };

  const countEventLikes = function () {
    return componentInstance.find('span.event-like').length;
  };

  const countTimelines = function () {
    return componentInstance.find('div.timeline').length;
  };

  const countTimelineTitles = function () {
    return componentInstance.find('div.timeline-title').length;
  };

  const countTimelineVisualizations = function () {
    return componentInstance.find('div.timeline-visualization').length;
  };
  
  it('Contains exactly four divs', function () {
    expect(countDivs()).toBe(4);
  });

  it('Contains one timeline', function () {
    expect(countTimelines()).toBe(1);
  });

  it('Contains one timeline title', function () {
    expect(countTimelineTitles()).toBe(1);
  });

  it('Contains one timeline visualization', function () {
    expect(countTimelineVisualizations()).toBe(1);
  });

  it('Contains exactly one event', function () {
    expect(countEvents()).toBe(1);
  });

  it('Contains exactly one empty time period between events', function () {
    expect(countTimeBetweenEvents()).toBe(1);
  });

  it('Contains exactly two event-like entries', function () {
    expect(countEventLikes()).toBe(2);
  });

});