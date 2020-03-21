// Require all nessesery dependencsies 
// import using require 

const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// https://socket.io/docs/#Using-with-Node-http-server socket io documentation usging with node http server 


//Specifying port 

const PORT = process.env.PORT || 5000


const app = express();
//Workign with socket io 
const server = http.createServer(app) // create server itialise socket io 
const io = socketio(server) // instance of the socket io 
// now we have socketio instanse that we will be using


// run the server 
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`)) // terminal cd client // npm start


