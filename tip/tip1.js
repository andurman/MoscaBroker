const mqtt = require('mqtt');
const client  = mqtt.connect({host:'localhost',port:'1883',username:'5c1b81a5641be20bc84e398c',password:'secret1'});
client.on('connect', () => {
    setInterval(() => {
        let temp = Math.round(Math.random()*100);
        client.publish('5c1b845b0fcfe508206a371c', temp.toString());
        console.log('Message Sent');
    }, 3000);
});