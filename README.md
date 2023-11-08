# Trip Booking App (FE) with React + TypeScript + Vite

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have a `<Windows/Linux/Mac>` machine.
- You have installed [Docker](https://www.docker.com/products/docker-desktop).
- You have installed the latest version of [Node.js and npm](https://nodejs.org/). (When running without Docker)

## Getting Started
To run this application, follow these steps: 

### Clone the repo
On your computer, navigate to the directory where you want to clone this repo. Clone the repo using and change the directory.
```bash
git clone https://github.com/shinyonogi/trip-website-fe
cd trip-website-fe
```

### Run the application
#### With Docker
If you are using Docker, build and run it.
You can also copy & paste the following command:
```bash
docker build -t trip-website-fe .
docker run -d -p 5173:5173 trip-website-fe
```
#### Without Docker
```bash
npm install
npm run dev
```

