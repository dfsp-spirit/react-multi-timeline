## React MultiTimeline

A component based on [react.js](https://reactjs.org/) that shows several (as many as you configure) horizontal timelines above each other. Useful for visualizing stuff that has happened at the same time in different places. Or whatever else you can come up with.


## WIP Warning

This is work in progress and NOT ready yet. You should not use it at this time. I will publish it to npm when it is ready. The process below describes only howto setup the development environment.

## Development setup

Make sure you have both `git` and `npm` installed for your OS, and add them to your `PATH` if needed. Then:

    git clone https://github.com/dfsp-spirit/react-multi-timeline.git
    cd react-multi-timeline/
    npm install

## Run development version

    cd react-multi-timeline/
    npm start
	
This should run it on 127.0.0.1:3000 and open your default browser at that location.


## Tests

    cd react-multi-timeline/
    CI=true npm test
    
## Preview

Here is a screenshot with some example timelines. It shows the room occupancy for a house with several rooms over time.

![react-multi-timeline-example](./react-multi-timeline-example.jpg?raw=true "React Multi Timeline example")

Each timeline represents a single room, and each event represents the time during which a certain person lived in the respective room.

The house has 8 rooms on 3 storeys, and the timelines are grouped accordingly.
	
	
## License and Author

react-multi-timeline is written by [Tim Schäfer](http://rcmd.org/ts/)

Copyright 2017 Tim Schäfer

Published under the MIT License, see the LICENSE file or https://opensource.org/licenses/MIT
