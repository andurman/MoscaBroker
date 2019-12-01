const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', () => {
    client.subscribe('muh1');
    client.subscribe('muh2');
    client.subscribe('muh3');
    client.subscribe('tip1');
    client.subscribe('tip2');
    client.subscribe('tip3');
    client.subscribe('science-temp');
    client.subscribe('fen2');
    client.subscribe('fen3');
    client.subscribe('hukuk1');
    client.subscribe('hukuk2');
    client.subscribe('hukuk3');
});
client.on('message', (topic, message) => {
    context = message.toString();
    console.log(context+"---->"+topic);
});
