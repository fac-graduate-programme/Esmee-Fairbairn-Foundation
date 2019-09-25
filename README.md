 # Esmee Fairbairn Foundation:sparkles:
[Click to visit the website](https://esmee-fairbairn-foundation.herokuapp.com/)


## Team :two_women_holding_hands::two_men_holding_hands:
- [Sallam](https://github.com/sallamTanna) 
- [Kate](https://github.com/dubhcait)
- [Abdullah](https://github.com/AbdallahAmmar96)
- [Dylan](https://github.com/Dalmano)

## Why:question:
Esmee Fairbairn Foundation faces many difficulties when deciding which organization deserves to get the fund it requires to support some projects. Many organizations fill an application to get the fund, however, most of them did not read and abide by the guidelines. These are set by the organization to get a better understanding of who qualifies for the funding. 
### Problem statement:fire:
Our client needs to add guides for each question, so the user can read them and apply these guidelines to the answered questions. Also, a quiz is added, before the application. This is so the user cannot start filling the application if they have not matched the organizations' criteria. 
### The solution :boom:
We created a quiz page containing three questions and validate the answers. Based on these answers, the user will know if they are eligible to continue with the application or not. If so, the user can continue with the application, following the guidelines to answer each question. These answers are then sent our database and then on to Salesforce. This will simplify the work-load, should the grant-manager decide the applicant deserves the funding or not. The aim is to increase the overall quality of applications.

## Tech stack:computer:
:bulb:Creat-react-app 
:bulb:Material-UI 
:bulb:Express.js
:bulb:Salesforce

## Setup:wrench:
### Installation:running:
1. Clone this repo `https://github.com/fac-graduate-programme/Esmee-Fairbairn-Foundation.git`
2. Create `.env`file, get in contact for Environment variables
3. use `npm i` to install all dependencies in the express server
4. Run ` npm run dev:server` to start express server
5. Enter client folder by `cd client`, and then install all dependencies in the client folder by runing `npm i`
6. Run `npm start` to launch the project on localhost:3000
### Deployment:airplane:
- The project was forked for the client
- Environment variables were changed
- It is currently deployed on Heroku
### Maintenance:hammer:
- The project is now deployed and running without problems
- The next step is futher user testing
- Any new featuers can be added in future


## Ideas for the next sprint:thought_balloon:
- Add Login Feature
- Unique questions for particular applications
- Make logo and reference guidelines so it can be populated through Salesforce
- Upload a snapshot of the application as a reference. Previously done with a word document as everything is editable in Salesforce. Incase someone incorrectly edited it in salesforce.
- Show number of words left for each answer while the user is typing.
# Project Timeline:clock1:

### Week 1: Design Week :triangular_ruler:
#### Understand the problem
First, we tried to understand the main problem that the organization faced. We browsed their website and understand how the current process is running and what is the problem with it. Initially, we thought our main target problem would be with successful applications. However, from looking at their data we found that if an application was successful this was usually on the first attempt. From the data, we noticed there were a collection of repeated failed applications from the same organisations. After doing this, we were able to figure out how we can give a solution to the problem that the organization has.
#### Figma prototype
We created the Figma prototype to simulate what the website looks like. We tried to make the design as simple as possible, and look similar to the existing website. The main aspects of our build weren't outward facing but rather a new internal system.
### Week 2: Sprint 001 :mag:
We wrote issues on GitHub to organize the work and started with the front-end. Each issue containing a component was done as we designed in Figma. We used create-react-app to build our application.

Main new things we learned:
- Use Material-UI Reatc framework: to use built component
- Overwrite Material-UI design, so we can build component look like our Figma design
- Using Yup for validation
### Week 3: Sprint 002 :bell:
Main new things we learned:
- CRM 
  1. We used `salesforce` to store our question and application answers
  2. We created new two `custom objects` and we added fields as we need inside each one.
  3. We created a connection to connect between salesforce and our application
- Heroku-connect
    1. We used heroku-connect to connect between our application and the data stored in salesforce 
- Google Analytics
    1. We used Google Analytics to capture the data of the user, in terms of user behaviour and navigation. 


