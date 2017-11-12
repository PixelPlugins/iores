import processing.serial.*;
import websockets.*;

WebsocketClient ws;
Serial port;

int now;

void setup(){
  port = new Serial(this, Serial.list()[4], 9600);
  ws = new WebsocketClient(this, "ws://plexicraft-server.herokuapp.com");
  ws.sendMessage("@PLEXI x %Chat% Send test");
  now=millis();
}

void draw(){
  if(millis()>now+3000){
    ws.sendMessage("@PLEXI ootetetootetetet");
    now=millis();
  }
}

void webSocketEvent(String msg){
  println(msg);
  
  if(msg.equals("@PLEXI x %you% Message 1")){
    port.write(1);
  }else if(msg.equals("@PLEXI x %you% Message 2")){
    port.write(2);
  }
}
