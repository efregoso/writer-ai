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
on the internet, so **none of the author's data is being used to train any 
AI models involved.**  


Planned features include:

* Browser integration for side-by-side story research
* Built-in dictionary and thesaurus on word highlight
* (Optional) Next word suggestions
* Writing flow, style, and continuity analysis
* AI review and suggestions
* Save notes / pics, organize them into folders
* Character / Plot / Location Bibles (database)
* Search files
* Export as PDF, TXT, DOCX
* Widget / popout


## Current tech stack
* **Database:** [PostgreSQL](https://www.postgresql.org)
* **AI Models:** [Hugging Face](https://huggingface.co/models)
* **Backend server:**
    * Python
        * Testing: [unittest library](https://docs.python.org/3/library/unittest.html)
    * Java
        * Testing: [jUnit](https://docs.junit.org/current/user-guide)
* **Frontend:**
    * React
        * Testing:
            * [Storybook](https://storybook.js.org)
            * [Jasmine](https://jasmine.github.io) 
* **Containerization:**
    * [Docker](https://www.docker.com)


## Dev Notes

* ### 2025 September 8th
    * Created GitHub repo for Writer.AI
    * Configuring PostgreSQL for use with Python/Java backends
    * Created mock Character database for use in local testing