# YelpCamp

![image](https://github.com/RiplisMartinkevicius/YelpCamp/assets/61363982/b5b453d0-0d75-4e65-ad0b-5246464b70ad)

YelpCamp is a campground review web application developed as part of Colt Steele's Web Development Bootcamp course. It allows users to browse and review various campgrounds, as well as share their own campground experiences. The application is built using Node.js, Express.js, MongoDB, and Bootstrap.

You can view the deployed app here https://yelpcamp-lithuania.onrender.com

## Features

* User authentication: Sign up, login, and logout functionality.
* Campground management: Add, edit, and delete campgrounds.
* Commenting system: Users can leave comments on campground pages.
* User authorization: Users can only edit or delete their own campgrounds and comments.
* Campground rating system: Users can rate campgrounds and view the average rating.
* Image uploads: Users can upload images for campgrounds, enhancing the visual experience.
* Flash messages: User-friendly flash messages for success, errors, and informational purposes.
* Responsive design: The application is designed to be fully responsive and accessible on various devices.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
`cd yelp-camp`
3. Install the dependencies using npm.
`npm install`
4. Create a MongoDB database either locally or using a cloud-based MongoDB service like MongoDB Atlas.
5. Set up the environment variables by creating a .env file in the root directory of the project. The required environment variables are:
`DATABASE_URL=<your_mongodb_connection_string>
SESSION_SECRET=<your_session_secret_key>`
6. Start the server.
`npm start`
7. Open your web browser and visit http://localhost:3000 to access the YelpCamp application.

## Technologies Used

* Node.js: A JavaScript runtime environment that allows running JavaScript on the server.
* Express.js: A minimal and flexible web application framework for Node.js.
* MongoDB: A NoSQL database used to store the application's data.
* Bootstrap: A popular CSS framework for building responsive and mobile-first websites.
* JavaScript: The programming language used for the logic and functionality of the application.
