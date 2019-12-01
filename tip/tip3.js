const mqtt = require('mqtt');
const client  = mqtt.connect({host:'localhost',port:'1883',username:'5c1b81a5641be20bc84e398c',password:'secret3'});
client.on('connect', () => {
    setInterval(() => {
        let temp = Math.round(Math.random()*100);
        client.publish('5c1b85d17efe5b2674069942', temp.toString());
        console.log('Message Sent');
    }, 3000);
});