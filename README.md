# Beginner Blog (Module 3 - Node.js)

This project is my completed code-along for Module 3 of the Node.js tutorial. It recreates the Node Crash Course app with my own styling, comments, and in-memory blog data.

## Features

- Express server with middleware (static files, body parsing, logging, and a custom helper)
- Separate router for blog-related routes (`/blogs`)
- EJS templates with shared header/footer partials
- Lightweight data layer that pretends to be a database for the blogs
- RESTful create/read/delete flows plus a friendly 404 page
- Static `index.html` at the repo root so GitHub Pages can serve a preview even though the backend requires Node

## Getting Started

```bash
npm install
npm run dev   # nodemon
# or
npm start     # node app.js
```

Open `http://localhost:3000` and you will be redirected to `/blogs`, which lists the sample posts. Creating and deleting posts updates the in-memory store for as long as the server is running.

## GitHub Pages Note

GitHub Pages cannot execute the Node server, so the static `index.html` (which lives at the project root) explains the project and links to the instructions. Deploy the `main` branch through GitHub Pages to satisfy the assignment requirement for a live URL, then run the project locally for the full experience.
