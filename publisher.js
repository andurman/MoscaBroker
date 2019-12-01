const mqtt = require('mqtt');
const client  = mqtt.connect({host:'localhost',port:'1883',username:'alice',password:'secrett'});

client.on('connect', () => {
    var count = 1;
    setInterval(() => {
        let temp = Math.round(Math.random()*40);
        client.publish('myTopic', temp.toString());
        console.log('Message Sent---->'+count);
        count++;
    }, 3000);
});