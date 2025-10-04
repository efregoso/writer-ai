# Writer.AI TODO:

* [X] Experiment with accessing entries in database using the connector

* [X] Build out backend in TypeScript and/or Python (really want to get some Python in there again)

* [X] Start building out the frontend in React, probably starting with the big RTF area

  * App
    * [ ] Integrate Storybook and Jest for unit testing.
    * [ ] Write tests.
    * [X] Decide on layout and flex / grid CSS elements in React.
    * [X] Find out how CSS plays with React
    * [ ] Initialize Storybook and Jest for testing
    * [ ] Implement routing
    * [X] Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
    * [ ] Look into React-specific accessibility features
    * [ ] Implement final stylings
    
  * MainTextArea
    * [ ] Write tests
    * [X] Expand the main text area into the "central panel"
    * [X] Find rich text editor React component or build one
    * [ ] Build out any specific customization controls needed for editing
      * Support for custom fonts?
      * AI Beta Read
    * [ ] Implement final stylings
    
  * Sidebar
    * [ ] Write tests
    * [X] Order the sidebar buttons in a flexbox, one on top of the other on the left hand side of the window
    * [ ] Replace sidebar button names with icons and tooltips.
    * [ ] Bundle sidebar into an expandable hamburger menu
    * [ ] Implement final stylings

* [ ] Connect backend to frontend to display mock data
  * [X] Decide if using a Client or Pool object to connect to database, based on user needs and features.

* [ ] Set up OpenTelemetry for stats on usage

* [ ] Make use of containerization
  * [X] Download SQL connector for Docker
  * [ ] Initialize app environment

* [ ] One last Prettify
