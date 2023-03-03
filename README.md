# NodeJS-API-Server
This is a Node.js API server that calls a URL and navigates through its content.
URL: https://partners.betvictor.mobi/en-gb/in-play/1/events

## Requirements ##

The Content hierarchy is: Sports &gt; Competions &gt; Events &gt; Markets &gt; Outcomes
Minimum requisites are:
- Endpoint to list all sports
- Endpoint to list all events(per sportId) – where sportId is optional parameter.
- Endpoint to list all data for a given event
- Endpoint to list all sports in all languages

## Prerequisites ##
Ensure that you have Node.js, NPM and Postman installed on your machine.

## Solution ##

I have created 4 API's to retrieve the requested data:

- getAllSports - API to get all of the sports.
- getAllEvents - API to get all of the events.
- getEventBySport/:id - API to get a sport given an id.
- getEventById/:id - API to get an events given an id.

I used the Express framework to build the API's and I used Axios to perform HTTP requests.

Commands used:

- node -v //checks that node has been installed. 
- npm -v //checks that nppm has been installed
- npm init -y //creates a package.json
- npm install express //installs the express framework
- npm install axios //installs Axios to perform HTTP requests. 

## Testing ##

Use Postman and the following GET requests to test the api:

- http://localhost:8080/getAllSports //This should return all of the sports.
- http://localhost:8080/getAllEvents //This should return all of the events.
- http://localhost:8080/getEventBySport/1 //This should return "No Data Found" as the sport does not exist.
- http://localhost:8080/getEventBySport/100 //This should return all of the events for the sport 100.
- http://localhost:8080/getEventById/1890788700999 //This should return "No Data Found" as the event does not exist.
- http://localhost:8080/getEventById/1890788700 //This should return the event details for the event 1890788700.
