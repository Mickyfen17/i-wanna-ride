## I Wanna Ride

## Project Status

Project is currently under development. Current functionality is;

* User login (Not secure as of yet)
* Fetch user details from API and sign user in
* Display a dashboard of current users upcoming rides
* Check system for matched rides and display rider matched button to dashboard if match is found
* Ability to click on matched ride button to display details of that ride and user you're matched with
* Ability to delete rides from system
* Ability to create a new ride
* Ability for user logout
* Ability for create new user

Upcoming features;

* Secure login
* Ability to edit user profile
* Add user image to profile
* Alter the format of the input date
* Ability to match rides by radius instead of exact location match
* Ability to know when a ride date has passed and to move ride into past rides section
* Ride rating system
* Pull in trail information
* Add more activities like skiing, running, rock climbing, road cycling

## Project Screen Shot(s)

![](./project/images/i-wanna-ride.png)   
![](./project/images/login.png)   
![](./project/images/create-user.png)   
![](./project/images/dashboard.png)   
![](./project/images/create-ride.png)   
![](./project/images/matched-ride.png)   

## Installation and Setup Instructions

* `git clone`
* `create db` - if you don't have postgresSQl go install it here: http://postgresapp.com/
* Follow the installation instructions for postgresSQl from website
* Start postgresSQl server
* `npm install`
* `npm start`

## Reflection
  - This project was a personal driven project and our final project for Module 3 of Turing School
  - I set out to build an application to match mountain bike riders who want to ride a trail but don't want to ride it alone. It allows users to add date location they want to ride along with a day and time and will check the system for another rider with the matching details.
  - This project was only my second experience with Redux so I was still a little unsure of the whole Redux cycle. I also decided to create my own backend using node, express and SQL after a brief introduction. Creating my own backend db was a challenge that I enjoyed and something that I look forward to working on again.
  - What were some unexpected obstacles?
      - The initial set up of webpack was a little challenging.  
  - What tools did you use to implement this project?
      - I wanted to become more comfortable with webpack and building out my own backend db therefore decided to build my own project from the start over using create-react-app.
      - Although not really needed on a project of this size, I decide to use Redux, again to just become more familiar with this framework
      - I also chose to use SCSS over CSS to gain more practice and be able to utilize mixins and variables.
      - In the end I used SCSS, es6, webpack, React, Redux, React Router, Node, Express JS and SQL which allowed my to build the application that I first envisioned.

## Resources
  - NPM packages used within this project
    - google-map-react
    - react-geosuggest
    - react-modal
