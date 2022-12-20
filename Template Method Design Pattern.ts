// Template Method Design Pattern
 
abstract class Television{
   abstract properties: any;
  
   powerOn(){
       return "Power On"
   }
   powerOff(){
       return "Power Off"
   }
   channelOn(){
       return "Channel On"
   }
   channelOff(){
       return "Channel Off"
   }
  
}
class Samsung extends Television{
   properties = {
       width:"48inch",
       height:"48inch"
      
   }
}
 
 
class Vizio extends Television{
   properties = {
       width:"28inch",
       height: "28inch"
   }
}
 
const tv = new Samsung()
 
console.log(tv.powerOn())
