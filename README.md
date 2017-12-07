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

   
Feature ADDED: Rounter is implemented
URL: http://localhost:3000/api/physicians/