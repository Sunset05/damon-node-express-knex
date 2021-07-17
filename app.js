//require express so that we can use it
const express = require('express')

/*make a constant that invokes express - an object with a bunch of methods built on top of it */ 
const app = express()

/*specify the port that we would like the app to listen on.*/ 
//process.env.PORT cromes from the environment variable from the deployment site
const port = process.env.PORT || 3000

/* GET REQUEST- a function that takes in a path and a function. get route for /students
*/
/*//create a basic route*/
app.get('/students', (request, response) => {
    response.send({name: "Keith"})
})







/*tell express to listen to port and pass an anonymous function. */
app.listen(port, ()=> {
    console.log(`LISTENING ON PORT ${port} `)
})

//express has a built in listen method that takes in a function. 
//the functio you pas is tell it what to do when listening
//nodemon watches fr code changes
/*check this in the console by going to terminal and typing node app.js*/


/*----make sure database has been created. npx knex init, knexfile.js needs to have name of database and also pg for client. 
then run knex migrate:make <TABLE_NAME>----*/