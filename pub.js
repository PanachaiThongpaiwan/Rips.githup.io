const mqtt =require("mqtt");
var client = mqtt.connect('mqtt://public.mqtthq.com');

client.on("connect",function(){
    setInterval(function(){
        var random = Math.random()*50;
        
        console.log(random);
        if(random<30){
            client.publish('oprocket','simple mqtt using '+random.toString()+'.');
        }
    }),3000;
});
