const DOSDetector = require('./dosDetector');

let instance = new DOSDetector(5000);

instance.on('DosAttack',(arg) => {
    console.log('Possible DOS-Attack detected on URL:' + arg.url);
    console.log('Time between calls was: ' + arg.totalTimeBetweenCalls);
})


instance.addUrl("dr.dk");

setTimeout((()=>instance.addUrl("dr.dk")),1000);
setTimeout((()=>instance.addUrl("dr.dk")),5000);
setTimeout((()=>instance.addUrl("dr.dk")),8000);
