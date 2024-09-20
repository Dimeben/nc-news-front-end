# Northcoders News Front-End

#### To access the app, follow this URL:

> https://bm-nc-news.netlify.app/

## Skills

- **JavaScript**
- **React.js**
- **React Routers**
- **State**
- **HTML**
- **CSS**
- **Axios**
- **Lottie**
- **Error-Handling**
- **Vite**
- **Controlled Components**
- **Conditional Rendering**
- **Hosting**
- **Pagination**
- **Responsive Design**
- **Accessible Design**
- **Optimistic Rendering**

## Setup

#### Clone the repository:

> Click the green `Code` button and copy the URL <br>

#### In your local machine's terminal, run:

> git clone https://github.com/Dimeben/nc-news-front-end.git <br>

#### Once it has downloaded, run:

> cd /nc-news-front-end <br>
> code . <br>

#### Install npm & Node.js by following this link:

[Install npm and Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

> Made using Node.js v22.4.1

#### Install the dependencies by running the following in your terminal:

> npm i

#### Setup the local host using Vite:

> npm run dev

#### Then click on the link that looks like:

> http://localhost:5173/

#### To end the hosting of the app:

> ctrl + c

## Journey & Features

This is a front end app which makes API calls to my back end project:

> https://github.com/Dimeben/nc-news

Using JavaScript, React, HTML & CSS, I have built a dynamic news aggregation app.
<br>
<br>
I began by planning a wire frame and considered user stories - how would someone interact with the app?
<br>
<br>
<img src="readme-imgs/1.png" alt="Wireframe" width="600" height="400">
<br>
<br>
<img src="readme-imgs/2.png" alt="Flowchart" width="400" height="200">
<br>
<br>
Once the plan was complete, I enabled Cross Origin Resource Sharing on my API. This was to prevent any errors which may have arisen.
<br>
<br>
I started my app by working through the basic functionality. I used React Router to create different paths and separated my components. In my api.js file, I used Axios to create the requests to my API - these used the CRUD operations.
<br>
<br>
<img src="readme-imgs/3.png" alt="An example of React Routers" width="300" height="300">
<br>
<br>
Throughout development, I utilised State and Effect to efficiently render my app. This helped me implement loading features as well as store the data received from my API calls.
<br>
<br>
At the top of the app, you will notice a parameters bar. This allows for users to filter all of the articles based on selected parameters.
<br>
<br>
<img src="readme-imgs/4.png" alt="Parameters Bar" width="800" height="100">
<br>
<br>
Underneath the header is a navigation bar. Clicking on one of the options will take you to the relevant page.
<br>
<br>
<img src="readme-imgs/5.png" alt="Navigation Bar" width="800" height="100">
<br>
<br>
Clicking on an article will take you to that article's page. On this page, you will find more information about the article, including the main body and the related comments. Users have the ability to post their own comments and give or take away votes. The newly posted comment will render optimistically.
<br>
<br>
<img src="readme-imgs/6.png" alt="Comments" width="300" height="300">
<br>
<br>
<img src="readme-imgs/7.png" alt="Post a comment" width="300" height="200">
<br>
<br>
A user is able post their own article. The form utilises validation techniques so that none of the fields are missed. It also works dynamically in the drop-down box as it maps through the available topics, rather than them being hard-coded.
<br>
<br>
<img src="readme-imgs/8.png" alt="Posting an article" width="300" height="300">
<br>
<br>
<img src="readme-imgs/9.png" alt="Drop down box" width="300" height="100">
<br>
<br>
Once an article has been posted, a working link to the new article will be displayed dynamically.
<br>
<br>
<img src="readme-imgs/10.png" alt="Link to new article" width="200" height="100">
<br>
<br>
On the homepage, I created a previous page and next page button. This allows me to easily implement my pagination queries from my back end project. If the user is on the first page, previous page will be unavailable. If they are on the last page, next page will be unavailable.
<br>
<br>
<img src="readme-imgs/11.png" alt="Next page" width="700" height="50">
<br>
<img src="readme-imgs/12.png" alt="Prev page & next page" width="700" height="50">
<br>
<img src="readme-imgs/13.png" alt="Prev page" width="700" height="50">
<br>
<br>
Using React Router, I dealt with errors relating to non-existent endpoints. Any URLs which do not follow the patterns that I have set out will automatically render by 404 page.
<br>
<br>
<img src="readme-imgs/14.png" alt="Errors in React Router" width="400" height="50">
<br>
<br>
<img src="readme-imgs/15.png" alt="404 page" width="400" height="200">
<br>
<br>

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
