const child  = require('child_process').fork('./server_child.js');
const server = require('net').createServer();

server.on('connection', (socket)=>{
 socket.end('Parent handled connection');
});

server.listen(8080, ()=>{
 child.send("The parent message", server);
});