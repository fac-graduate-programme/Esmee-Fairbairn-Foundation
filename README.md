 # Esmee Fairbairn Foundation:sparkles:
[Click to visit the website](https://esmee-fairbairn-foundation.herokuapp.com/)


## Team :two_women_holding_hands::two_men_holding_hands:
- [Sallam](https://github.com/sallamTanna) 
- [Kate](https://github.com/dubhcait)
- [Abdullah](https://github.com/AbdallahAmmar96)
- [Dylan](https://github.com/Dalmano)

## Why:question:
Esmee Fairbairn Foundation faces many problem when deciding which organization deserves to get the fund it needs to support some activities. Many organizations fill an application to get he fund, but most of them did not read the guidlines that the organization set to know who really deserve to get the fund.
### Problem statement:fire:
Our client needs to add guides for each question, so the user can read them and apply these guides when he answer the questions.  Also, the quiz is added, so the user cannot start filling the application if he didn't match the organization rules
### The solution :boom:
We created a quiz page contains three questions and we validate the answers of these questions. Based on these answers, the user can know if he is able to cintinue with the application or not. If so, then the user can coninue with the application and read the quieds he should follow to answer each question. This will simlify the work should the manager do to decide if this user deserve the fund or not.

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
- The project now is deployed and running without problems
- Any new featuers can be added in future


## Ideas for the next sprint:thought_balloon:
- Unique questions for particular applications
- Make logo and reference guidelines so it can be populated through Salesforce
- Upload a snapshot of the application as a reference. Previously done with a word document as everything is editable in Salesforce. Incase someone incorrectly edited it ( unlikely will do)
# Project Timeline:clock1:

### Week 1: Design Week :triangular_ruler:
#### Understand the problem
First thing, we tried to understand the main problem that the organization faced. we browsed their website and understand how the current process is running and what is the problem with it. After doing this, we was able to figure out how we can give a solution for the problem that the organization has.
#### Figma prototype
We created the figma prototype to simulate how the website will look like. We tried to make the design as simple as possible, and look similar to existing website.
### Week 2: Sprint 001 :mag:
we wrote issues on GitHub to organize the work. We started with the front-end. Each issue contains the component should be done as we designed in Figma .We used create-react-app to build our application.

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


