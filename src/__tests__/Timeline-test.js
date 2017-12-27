import React from 'react';
import {shallow, render, mount } from 'enzyme';
import { Timeline } from '../Timeline';

let componentInstance;

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

const getTimelineTitles = function () {
  return componentInstance.find('div.timeline-title');
};

const getEvents = function () {
  return componentInstance.find('span.event');
};

const countTimelineVisualizations = function () {
  return componentInstance.find('div.timeline-visualization').length;
};


describe('Simple timeline with a single event that starts after time point zero renders as expected.', function () {

  
  beforeEach(function () {
    const component = <Timeline
    timelineTitle="Simple Timeline"
    events={[{eventTitle: 'Event 1', start: 5, duration: 10}]}
    displayTimeUnits={true}
    timeUnitLabel="months"
    useParentWidth={true}
    lastEventEndAbsoluteOverAllTimelines={10}
    />;
    componentInstance = mount(component);
  });  
  
  it('Contains exactly four divs', function () {
    expect(countDivs()).toBe(4);
  });

  it('Contains one timeline', function () {
    expect(countTimelines()).toBe(1);
  });

  it('Contains one timeline title', function () {
    expect(countTimelineTitles()).toBe(1);
  });

  it('Has the proper timeline title set', function () {
    expect(getTimelineTitles().get(0)).not.toBeUndefined();
    expect(getTimelineTitles().get(0).props.children).toBe('Simple Timeline');
  });

  it('Contains one timeline visualization', function () {
    expect(countTimelineVisualizations()).toBe(1);
  });

  it('Contains exactly one event', function () {
    expect(countEvents()).toBe(1);
  });

  it('Contains an event that has the proper event title and duration set', function () {
    expect(getEvents().get(0)).not.toBeUndefined();
    expect(getEvents().get(0).props.title).toBe('Event 1 (10 months)');
  });

  it('Contains exactly one empty time period between events', function () {
    expect(countTimeBetweenEvents()).toBe(1);
  });

  it('Contains exactly two event-like entries', function () {
    expect(countEventLikes()).toBe(2);
  });

});


describe('Complex timeline with several events, some directly consecutive, some with empty time between them, renders as expected.', function () {

  
  beforeEach(function () {
    const component = <Timeline
    timelineTitle="Complex Timeline"
    events={[{eventTitle: 'event1', start: 5, duration: 10}, {eventTitle: 'event2', start: 15, duration: 3}, {eventTitle: 'event3', start: 20, duration: 10}]}
    displayTimeUnits={true}
    timeUnitLabel="months"
    useParentWidth={true}
    lastEventEndAbsoluteOverAllTimelines={30}
    />;
    componentInstance = mount(component);
  });
  
  it('Has the proper timeline title set', function () {
    expect(getTimelineTitles().get(0)).not.toBeUndefined();
    expect(getTimelineTitles().get(0).props.children).toBe('Complex Timeline');
  });
  
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

  it('Contains three events', function () {
    expect(countEvents()).toBe(3);
  });

  it('Contains two empty time periods between events', function () {
    expect(countTimeBetweenEvents()).toBe(2);
  });

  it('Contains the events with proper titles and durations', function () {
    expect(getEvents().get(0).props.title).toBe('event1 (10 months)');
    expect(getEvents().get(1).props.title).toBe('event2 (3 months)');
    expect(getEvents().get(2).props.title).toBe('event3 (10 months)');
  });

  it('Contains five event-like entries', function () {
    expect(countEventLikes()).toBe(5);
  });

});
