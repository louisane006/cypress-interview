# Interview tasks
There are two tasks to be completed. I would expect this to take around 30 minutes.

This assignment is for applicants wishing to apply to Aluminati as a QA Automation Tester. There are two tasks below which use the testing framework Cypress. Submission of your task involves writing the test code that achieves both tasks and submitting any files you create or edit to achieve this via your recruitment manager.

Whilst it is preferred that you use Cypress, you may also submit using your own testing tool. In this case we would need you to record and submit a video of the execution along with your code.

Whilst Cypress is quick to pick up, you can see a short introduction to this tool at [this link](https://youtu.be/VvLocgtCQnY?list=PL8GlT7H3xOcKBEDLXwJPE1jwZ_Z4oh6Rk&t=69)

### Task 1:
Navigate to https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.

You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.

### Task 2
Task: In mobile view, browse to Our services -> Aluminate for education and get the value for every href on every anchor (<a> tag) on the page.
Output the href values to the console. Logging to cypress or the standard dev console is fine.

Please perform this entire task on the mobile site, including the navigation and link data fetching.

## Installing Cypress
Download follow the instructions [here](https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download) to download/install cypress. This test is written with _direct installation_ in mind, but if you're more comfortable with a different method and you can make it work, you're welcome to do so.

The next step is to clone our test repo from [this github link](https://github.com/Aluminati/cypress-interview). You can either use git, the 'download zip' function on GitHub. You should then be able to run cypress on this and get our basic setup.
