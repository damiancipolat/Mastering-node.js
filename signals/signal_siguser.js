//Program still running.
console.log('Program running...');
console.log('Test SIGUSER, kill -s SIGUSR1 <PID>');
setInterval(function() {}, 1e6);

//When we receive the signal SIGINT -> Ctrl+c
process.on('SIGUSR1', ()=>{

 console.log('-> SIGUSR1 signal received from SO');
 
});