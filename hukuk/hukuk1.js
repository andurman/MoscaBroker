const mqtt = require('mqtt');
const client  = mqtt.connect({host:'localhost',port:'1883',username:'5c1b81d668486a2c14550905',password:'secret7'});
client.on('connect', () => {
    setInterval(() => {
        let temp = Math.round(Math.random()*100);
        client.publish('5c1b87e1b5e137182cf462cc', temp.toString());
        console.log('Message Sent');
    }, 3000);
});