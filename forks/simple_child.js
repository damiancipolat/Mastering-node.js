console.log('Child started');

//When receive the message from the master process.
process.on('message', (msg)=>{

 console.log('Parent said: ', msg);

 process.send("I love you too");

});