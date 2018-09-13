var tmi = require ('tmi.js')

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "BeL1kePanda_Bot",
    password: process.env.autt
  },
  channels: ["BeL1kePanda_Bot"]
};

var client = new tmi.client(options);
client.connect();

/// on start \\\

client.on('connected', function(address, port) {
  console.log("[PandaBot] Bot was started!")
});

client.on('connected', function(address, port) {
  client.say("BeL1kePanda_Bot", "Hello! I joined to this channel")
});

///comm\\\
var sw = 0
var dw = 0
var sqw = 0

var sk = []
var dk = []
var sqk = []
var t222


//Solo
client.on('chat', function(channel, user, message, self){
  if(message.match(/(!addsolo)+/i) && (user.badges.broadcaster == 1 || user.mod==true)){
  sw = sw+1;
  sk.push(message.match(/\d+/g));
    client.say("BeL1kePanda_Bot","Solo: "+sw+" Wins ("+sk+" Kills)");}});

client.on('chat', function(channel, user, message, self){
  if(message.match("!remsolo") && (user.badges.broadcaster == 1 || user.mod==true)){
  sw = sw-1;
    client.say("BeL1kePanda_Bot","Solo: "+sw+" Wins ("+sk+" Kills)");}
  else if(message.match("!remsolo k") && (user.badges.broadcaster == 1 || user.mod==true)){
    sw = sw-1;
    sk.pop();
      client.say("BeL1kePanda_Bot","Solo: "+sw+" Wins ("+sk+" Kills)");}
  });
//Duo
client.on('chat', function(channel, user, message, self){
  if(message.match(/(!addduo)+/i) && (user.badges.broadcaster == 1 || user.mod==true)){
  dw = dw+1;
  dk.push(message.match(/\d+/g));
    client.say("BeL1kePanda_Bot","Duo: "+dw+" Wins ("+dk+" Kills)");}});

//Squad
client.on('chat', function(channel, user, message, self){
  if(message.match(/(!addsquad)+/i) && (user.badges.broadcaster == 1 || user.mod==true)){
  sqw = sqw+1;
  sqk.push(message.match(/\d+/g));
    client.say("BeL1kePanda_Bot","Squad: "+sqw+" Wins ("+sqk+" Kills)");}});

//Reset
client.on('chat', function(channel, user, message, self){
  if(message === "!reset"){
    sw = 0
    dw = 0
    sqw = 0
    sk = []
    dk = []
    sqk = []
    t222
    client.say("BeL1kePanda_Bot","Done");}});

//Wins
client.on('chat', function(channel, user, message, self){
  if(message === "!wins"){
    var swins = "Solo: "+sw+" Wins ("+sk+" Kills)"
    var dwins = "Duo: "+dw+" Wins ("+dk+" Kills)"
    var sqwins = "Squad: "+sqw+" Wins ("+sqk+" Kills)"
    var nowins = "Unfortunately, no wins today";
    var sp = ", ";
  function  myfunction(){
      if(sw > 0 && dw > 0 && sqw > 0) {
    t222 = swins+sp+dwins+sp+sqwins}
    else if(sw > 0 && dw > 0){
    t222 = swins+sp+dwins}
    else if(sw > 0 && sqw > 0){
    t222 = swins+sp+sqwins}
    else if(dw > 0 && sqw > 0){
    t222 = dwins+sp+sqwins}
    else if(sw > 0){
    t222 = swins}
    else if(dw > 0){
    t222 = dwins}
    else if(sqw > 0){
    t222 = sqwins}
    else {
    t222 = nowins}
    }
    myfunction();
    client.say("BeL1kePanda_Bot", t222)
    ///console.log (user.user-type);
    //console.log(user.badges.broadcaster, user.mod );
    //console.log ();
  }
});
