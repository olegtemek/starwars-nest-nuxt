# StarWarsApi

## About
* This application work with [Swapi](https://swapi.dev). User can find character, planet, starship by name.
* You can send a query to search for the same data
* For backend i use - NestJs. For frontend - NuxtJs. All code on Typescript

## How to install

    cd <path_to_project>/
    docker-compose up -d --build

## How to try

  * Frontend: http://localhost:8000/
  * Backend: http://localhost:8000/api

<br />

## Api documentation

### Request

`GET /api/search?query=text`

    curl -i -H 'Accept: application/json' http://localhost:8000/api/search?query=Darth%20Vader

### Response

    HTTP/1.1 200 OK
    Date: Fri, 16 Jun 2023 07:21:35 GMT
    Server: nginx/1.25.0
    Content-Type: application/json
    X-Powered-By: Express
    Content-Length: 118

    {"peoples": [{"name": "Darth Vader","height": "202","mass": "136","gender": "male"}],"planets": [],"starships": [],"total": 1}

<br />

## What difficulties did I face

  swapi has built-in pagination and I decided to remove it simply by running a loop on the next key in response

---

➡️ [more projects...](https://github.com/olegtemek)

---
