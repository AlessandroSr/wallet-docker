# wallet-docker

## Description

This project is a straightforward yet effective solution for managing personal finances. The application allows users to track their income and expenses conveniently.  Additionally, the project has been containerized using Docker for easy deployment and scalability.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# spa (frontend)
$ npm run dev

# api (backend)
$ npm start

# starts all containers defined in the docker-compose.yml file
$ docker compose up -d

# removes all containers, networks, volumes and images created by docker-compose up.
$ docker compose down

```
