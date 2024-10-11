# SBA 318: Express Server Application

## Introduction
This project is a Node.js and Express-based web application developed as part of the SBA 318 assessment. It demonstrates the use of Node and Express features, including RESTful API creation, middleware usage, and view rendering. The project focuses on building a functional server-side application with a simple and clear user interface.

## Features
- **RESTful API**: Supports GET, POST, PATCH, and DELETE routes for data manipulation.
- **Middleware**: Includes custom middleware for request logging and authentication, as well as error-handling middleware.
- **View Rendering**: Uses EJS as the template engine to render dynamic HTML views.
- **Data Management**: Manages multiple data categories such as users, posts, and comments.
- **Form Interaction**: Includes an HTML form for user interaction with the API.
- **Simple Styling**: Provides basic styling with CSS for a clean user interface.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building server applications.
- **EJS**: Template engine for rendering views.
- **JavaScript**: Programming language for backend logic.
- **HTML & CSS**: For creating views and styling.

## Setup Instructions
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-server-app
  ```
2. Install dependencies:
  ```bash
   npm install
 ```
3. Create a .env file (if using environment variables):
```plaintext
PORT = 3000
```
4. Start the server:
```bash
npm start

```

5. Open your browser and navigate to:
```arduino
http://localhost:3000

```
## API Endpoints
- GET `/users:` Retrieve a list of users.
- GET `/users/:id:` Retrieve a single user by ID.
- POST `/posts:` Create a new post.
- PATCH `/users/:id:` Update a user's information.
- DELETE `/comments/:id:` Delete a comment by ID

## Middleware
- Custom Middleware:
    - Request Logger: Logs request details for debugging.
    - Authentication: Checks for a valid apiKey in query parameters.
- Error Handling: Catches and responds to server errors.
## Folder Structure
```csharp
express-server-app/
├── public/          # Static assets (CSS)
├── views/           # EJS templates
├── routes/          # API route definitions
├── middleware/      # Custom middleware functions
├── server.js        # Main server file
└── README.md        # Project documentation

```

## Acknowledgments
Thanks to the instructor, Mr Dylan Comeau and peers for their guidance and support during the development of this project.
Resources used for this project include [Pexels](https://www.lipsum.com/) for images, [Lorem Ipsum](https://www.lipsum.com/) for placeholder text and [GIFs](https://www.motionelements.com/search/gif) for GIFs (and other media)..
