Repo_Trials: Trial projects
===========================

1. Install: nodejs, mongodb
2. Create Project using:
   npm init
3. Create dependecies/modules: express
   npm install express --save
   npm install mongoose cors body-parser --save

4. Start Server (run entry point of the application)
   npm app.js
   
5. Avoind restart for every chnage in server code. Use "nodemon".
   npm install -g nodemon
   nodemon
   (it will monitor for any change in the code and will restart the server)

6. Install chrome Postman application to send HTTPS requests: POST, GET, DELETE  
 
--------------------------------------------------------------
   
Feature ADDED: MongoDB model, DB connection,
               http GET to fetch all providers in database
               http POST to add a provider
			   http DELETE to delete provider


ADD provider to database:
	HTTP POST
	Header->Content-Type = application/json
	Body->raw
	{
	"first_name": "Vikram",
	"last_name": "Simha",
	"phone": "0034567890"
    }
	URL: localhost:3000/api/provider
	
GET all providers:
	HTTP GET
	URL: localhost:3000/api/providers			   

DELETE a provider by id:
	HTTP DELETE
    pick _id of one of the provider to be deleted & pass
	URL: localhost:3000/api/provider/5a2a5f9c9817122d94dbeb40
