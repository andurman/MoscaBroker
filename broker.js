const mosca = require('mosca');
const db = require('./db.js')();
const User = require('./userDevices');

const settings = {
    interfaces: [
        { type: "mqtt", port: 1883 }
    ],
    logger: { name: 'MoscaServer', level: 'error' }
};

const server = new mosca.Server(settings);

server.on('ready',() => {
    setup();
    console.log("ready");
});

function setup() {
    server.authenticate = authenticate;
    //server.authorizePublish = authorizePublish;
    //server.authorizeSubscribe = authorizeSubscribe;
}

// Accepts the connection if the username and password are valid
var authenticate = function(client, username, password, callback) {
    const promise = User.findOne({user_id:username, deviceSecret:password});
    promise.then((data) => {
        var authorized = false;
        if(data == null) callback(null, authorized);
        else
        {
            authorized = true;
            client.user = username;
            callback(null, authorized);
        }
    });
}

// In this case the client authorized as alice can publish to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizePublish = function(client, topic, payload, callback) {
    callback(null, client.user == topic.split('/')[1]);
}

// In this case the client authorized as alice can subscribe to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizeSubscribe = function(client, topic, callback) {
    callback(null, client.user == topic.split('/')[1]);
}