YouTube Clone
A functional YouTube Clone built with React, Redux, Node.js, Express, MongoDB, and Authentication. Users can watch videos, manage channels, and authenticate securely.

Technologies Used
Frontend (React & Redux)
Home Page – Displays a list of videos.
Search Functionality – Find videos and channels easily.
🎥Video Player Page – Watch videos with details like views, genre, and uploader info.
Channel Pages – View all videos uploaded by a specific channel.
Authentication – Users can log in and register securely.

Backend (Node.js & Express)
RESTful API – Handles video, user, and authentication requests.
JWT Authentication – Secure login/logout process.
MongoDB Database – Stores user and video details.

Tech Stack
Frontend
React (UI)
Redux (State Management)
Vite (Bundler for fast performance)
React Router (Navigation)

Backend

Node.js & Express (Server-side)
MongoDB & Mongoose (Database)

Installation & Setup

git clone https://github.com/akanshamore/youtube-clone
cd youtube-clone

Install Dependencies
Frontend

cd frontend
yarn install

Backend

cd backend
yarn install

Environment Variables (Backend)
Create a .env file inside the backend folder and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the Project

Start Backend

cd backend
yarn run dev

Start Frontend

cd frontend
yarn dev

This project is open-source and available for personal and educational use.
