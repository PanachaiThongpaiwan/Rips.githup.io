const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://public.mqtthq.com');

client.on("connect",function(){
    client.subscribe("oprocket");
    console.log('client has subscribe successfully');

});
client.on('message',function(topic,message){
    console.log(message.toString());
})

