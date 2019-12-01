const mqtt = require('mqtt');
const client  = mqtt.connect({host:'localhost',port:'1883',username:'5c1b81d668486a2c14550905',password:'secret11'});
client.on('connect', () => {
    setInterval(() => {
        let temp = Math.round(Math.random()*50);
        client.publish('5c1b881b9158951cc4dbbd63', temp.toString());
        console.log('Message Sent');
    }, 3000);
});