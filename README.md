# Writer.AI

Writer.AI is a work-in-progress web application for creative writers
that integrates AI in ways that **facilitate the creative writing process,
versus creative OVER-writing**.  As a writer myself, I have seen a lot
of authors in the community worried about the impact of "AI writing" on
flesh-and-bone authors.  But AI can be an extremely powerful tool for us, 
particularly when integrated into the creative process as an "editor",
"beta reader", or "fact consultant", without allowing it too much
creative liberty over the work.

My goal is to make this application run locally using AI models offered
on the internet, so **none of the author's input is being used to train any 
of the AI models involved,** protecting the creative integrity of your work.  


Planned features include:

* **Side-by-side browser integration** for note-taking and fact-checking
* **Built-in dictionary and thesaurus** on word highlight or lookup
* **Optional next-word suggestions**
* **AI beta reader**, including **writing flow, style, fact-checking, and**
**continuity analysis**
* **Save notes / pics**, organize them into folders
* **Character / Plot / Location Bibles**
* **Spotify playlist integration** for accessing your writing playlists
* **Search** saved notes, files, and story bible entries
* **Export as PDF, TXT, or DOCX**
* **Pop-out widget** for continued writing without focusing on the web window


## Current tech stack
* **Database:** [PostgreSQL](https://www.postgresql.org)
* **ML models / LLMs:** [Hugging Face](https://huggingface.co/models)
* **Backend server:**
    * Node.js
        * Testing:
            * [Storybook](https://storybook.js.org)
            * [Jasmine](https://jasmine.github.io)
* **Frontend:**
    * React, Next.js
        * Testing:
            * [Storybook](https://storybook.js.org)
            * [Jasmine](https://jasmine.github.io)
* **Containerization:**
    * [Docker](https://www.docker.com)


## Dev Notes

### 2025 September 26th

#### Today
  * Convert "Popout panel" --> "Hide sidebar" and change stylings for the button to distinguish it from the others
  * Refactor sidebar.css

#### Next Steps
  * Figure out how to adjust the size of a column in the grid layout
  * Then, decide on flex or grid CSS layout
  * Expand the main text area into the "central panel"
  * Implement routing for existing components and pages
  * Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
  * Look into React-specific accessibility features
  * Bundle sidebar into an expandable hamburger menu
  * Replace sidebar button names with icons and tooltips
  * Implement stylings for MainTextArea and Sidebar components

---

### 2025 September 24th

#### Today
  * Added "Saved Notes" to sidebar buttons.
  * Upload new gitignore.

#### Next Steps
  * Figure out how to adjust the size of a column in the grid layout
  * Then, decide on flex or grid CSS layout
  * Expand the main text area into the "central panel"
  * Implement routing for existing components and pages
  * Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
  * Look into React-specific accessibility features
  * Bundle sidebar into an expandable hamburger menu
  * Replace sidebar button names with icons and tooltips

---

### 2025 September 23rd

#### Today
  * Learn about CSS grid layout and try it out for the main page
  * Implement stylings for MainTextArea and Sidebar components
  * Order the sidebar buttons, one on top of the other, on the left hand side of the window

#### Next Steps
  * Figure out how to adjust the size of a column in the grid layout
  * Then, decide on flex or grid CSS layout
  * Expand the main text area into the "central panel"
  * Implement routing for existing components and pages
  * Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
  * Look into React-specific accessibility features
  * Bundle sidebar into an expandable hamburger menu
  * Replace sidebar button names with icons and tooltips

---

### 2025 September 22nd

* Returned from sick leave

#### Today
  * Began implementing component stylings
  * Began ordering the sidebar buttons in a flexbox, one on top of the other on the left hand side of the window

#### Next Steps
  * Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
  * Expand the main text area into the "central panel"
  * Implement routing for existing components and pages

---

### 2025 September 12th
#### Today
  * Scaffolded main home page, text area, and sidebar components
  * Flexbox refresher (I was recommended [Flexbox Froggy](https://flexboxfroggy.com) by a manager back when I first started web development, and it still rocks.)
  * Reviewing documentation on Next.js routing

#### Next Steps
  * Find out how CSS plays with React, and begin implementing component stylings
  * Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
  * Order the sidebar buttons in a flexbox, one on top of the other on the left hand side of the window
  * Expand the main text area into the "central panel"
  * Implement routing for existing components and pages

---

### 2025 September 10th
#### Today
  * Established connection to a mock database
  * Learned more about available Node.js modules
  * Bootstrapped the React GUI using Next.js

#### Next Steps
  * Continue building out backend with TypeScript / Node.js
  * Connect  backend to frontend to display mock data
  * Start building out the frontend in React, probably starting with the big RTF area
  * Decide if using a Client or Pool object to connect to database, based on user needs and features. 

---

### 2025 September 9th
#### Today
  * Set up mock database for manual testing of backend
  * SQL refresher
  * Learning about Node.js PostgreSQL connector library

#### Next Steps
  * Begin building out backend in TypeScript and/or Python (really want to get some Python in there again)
  * Experiment with accessing entries in database using the connector

---

### 2025 September 8th
#### Today:
  * Created GitHub repo for Writer.AI
  * Configuring PostgreSQL for use with Python/Java backends
  * Created mock Character database for use in local testing
  * Added README.md to repo with plans for features.