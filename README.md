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

### 2025 October 5th
* Initialize Storybook testing framework and default test files for MainTextArea and Sidebar
* Nit: Added yesterday's entry I missed and move my to-dos to a separate file

---

### 2025 October 2nd
* Update local stylesheets after installing npm packages from Tiptap

---

### 2025 October 1st
* Look into [React Material UI](https://mui.com/material-ui), in particular for a rich text editor
* Integrate TipTap's rich text editor as MainTextArea's primary element
* Expand the main text area into the "central panel"

---

### 2025 September 26th
* Convert "Popout panel" --> "Hide sidebar" and change stylings for the button to distinguish it from the others
* Refactor sidebar.css

---

### 2025 September 24th
* Added "Saved Notes" to sidebar buttons.
* Upload new gitignore.

---

### 2025 September 23rd
* Learn about CSS grid layout and try it out for the main page
* Implement stylings for MainTextArea and Sidebar components
* Order the sidebar buttons, one on top of the other, on the left hand side of the window

---

### 2025 September 22nd
* Returned from sick leave
* Began implementing component stylings
* Began ordering the sidebar buttons in a flexbox, one on top of the other on the left hand side of the window

---

### 2025 September 12th
* Scaffolded main home page, text area, and sidebar components
* Flexbox refresher (I was recommended [Flexbox Froggy](https://flexboxfroggy.com) by a manager back when I first started web development, and it still rocks.)
* Reviewing documentation on Next.js routing

---

### 2025 September 10th
* Established connection to a mock database
* Learned more about available Node.js modules
* Bootstrapped the React GUI using Next.js

---

### 2025 September 9th
* Set up mock database for manual testing of backend
* SQL refresher
* Learning about Node.js PostgreSQL connector library
  
---

### 2025 September 8th
* Created GitHub repo for Writer.AI
* Configuring PostgreSQL for use with Python/Java backends
* Created mock Character database for use in local testing
* Added README.md to repo with plans for features.