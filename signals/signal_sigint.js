//Program still running.
console.log('Program running, press Ctrl+C to test the capture signal.');
setInterval(function() {}, 1e6);

//When we receive the signal SIGINT -> Ctrl+c
process.on('SIGINT', ()=>{

 console.log('-> SIGINT signal received');
 process.exit(1);

});