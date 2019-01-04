const cp  = require('child_process');
const child = cp.fork('./simple_child.js');

console.log('Master started');

//Send to children.
const sendToChild = (message,childProc)=>{
  childProc.send(message);
}

//Create interval.
setInterval(()=>{
  sendToChild('I love you <3',child)
}, 1000);

//When the children process send a message to the parent.
child.on('message', (msg)=>{
 console.log('Child said: ', msg);
});

