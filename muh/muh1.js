const mqtt = require('mqtt');
const client  = mqtt.connect({host:'localhost',port:'1883',username:'5c1b81a5641be20bc84e398c',password:'secret4'});
client.on('connect', () => {
    setInterval(() => {
        let temp = Math.round(Math.random()*100);
        client.publish('5c1b863b3d215b021ceef259', temp.toString());
        console.log('Message Sent');
    }, 3000);
});