import React from 'react';
import {shallow, render } from 'enzyme';
import { Timeline } from '../Timeline';

test('Timline shows the title', () => {
  
  
  const timeline = render(<Timeline
            timelineTitle="Timeline"
            events={[{eventTitle: 'evenet1', start: 5, duration: 10}]}
            displayTimeUnits={true}
            timeUnitLabel="months"
            useParentWidth={true}
            lastEventEndAbsoluteOverAllTimelines={10}
          />);
		  
    const len = timeline.find('div').length;

  expect(len).toEqual(2);
});