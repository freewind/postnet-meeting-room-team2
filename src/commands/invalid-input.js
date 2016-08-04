/**
 * Created by xjy on 8/3/16.
 */
let CommandResponse=require("./route-response");
class InvalidInputCommand{
  action(){
    return new CommandResponse( {
           error:"Please give right input."
    });
  }
}
module.exports=InvalidInputCommand;
