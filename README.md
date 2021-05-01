# U Notes

U Notes is a video note taking full-stack application created with React.js, MongoDB, and Auth0. The user can search videos, take notes as they are watching the video, and save all of that together for future reference. Using the Youtube Data API, users have access to all videos on the platform. When creating notes, the user is able to log the time of the video so they can easily find the exact elapsed time that the note was created. The user must log in or create an account to begin using U Notes; Once the user is logged in, they are able to save data to their personal account and retrieve it at any given time.

## Table of Contents
- [General Info](#general-info)
- [Link to deployed page](#general-info)
- [Landing Page](#landing-page)
- [Login or Signup Page (Auth0)](#login-or-signup-page-(auth0))
- [Video Search Page](#video-search-page)
- [Video Notes Page](#video-notes-page)
- [My Saved Video Notes Page](#my-saved-video-notes-page)
- [Technologies](#technologies)
- [Summary](#summary)
- [Authors](#authors)

## General Info

U Notes meets the following criteria:

  GIVEN I am using a video note taking app <br />
  WHEN I click the "Let's Get Started" button <br />
  THEN I am redirected to the login/create user page <br />
  WHEN I login/create an account <br />
  THEN I am redirected to the video search page <br />
  WHEN I search a video <br />
  THEN I am presented with a list of 15 related videos <br />
  WHEN I click on the video I want to watch/take notes on <br />
  THEN I am redirected to the "video notes" page <br />
  WHEN I create a note with the time stamp <br />
  THEN the note saves to the timeline <br />
  WHEN I click on the "My Video Notes" tab <br />
  THEN all my saved notes are shown on that page with the corresponding video <br />
  WHEN I click on the trash can on the card <br />
  THEN the card is deleted from my page and database <br />
  WHEN I click on the addition screen on the card <br />
  THEN I am redirected back to the "video notes" page of the chosen video w/ my saved notes <br />
  WHEN I click "Log Out" on the navbar <br />
  THEN my user is logged out and I am redirected back to the landing page <br />
  
## Link to Deployed Page
https://desolate-shore-89926.herokuapp.com/

## Landing Page
![image](https://user-images.githubusercontent.com/71292617/116770953-679b0f00-a9fc-11eb-9a24-d2cea87d4c7c.png)

## Login or Signup Page (Auth0)
![image](https://user-images.githubusercontent.com/71292617/116771424-1725b080-aa00-11eb-8429-72b8e53dada0.png)

## Video Search Page
![image](https://user-images.githubusercontent.com/71292617/116770987-b47ee580-a9fc-11eb-9f66-1066e02a989c.png)

## Video Notes Page
![image](https://user-images.githubusercontent.com/71292617/116771154-02e0b400-a9fe-11eb-9639-5262aa1019ce.png)

## My Saved Video Notes Page
![image](https://user-images.githubusercontent.com/71292617/116771358-aa121b00-a9ff-11eb-9996-b4e33908815e.png)

## Technologies
This project is created with:
- [React.js](https://reactjs.org/)
- [Javascript](https://javascript.com/)
- [HTML](https://html.com/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [Node.js](https://nodejs.org/en/)
- [Auth0](https://auth0.com/)
- [MongoDB](https://www.mongodb.com/2)
- [Express](https://expressjs.com/)
- [npm](https://www.npmjs.com/)

Frameworks used:
- [Material-UI](https://material-ui.com/)

APIs used:
- [Youtube Data API](https://developers.google.com/youtube/v3)

## Authors
- [Melissa Stott](https://github.com/melissa-stott)
- [Rheanne Reyes](https://github.com/rheannemr)
- [Ines Radic](https://github.com/inesr19)
- [Tina Armstead](https://github.com/tmarmstead)
- [Rebecca Berger-Howe](https://github.com/rhowe20)
