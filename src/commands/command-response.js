/**
 * Created by xjy on 8/4/16.
 */
class CommandResponse{
  constructor({error,text,reset,newMapping}){
    this.error=error;
    this.text=text;
    this.reset=reset;
    this.newMapping=newMapping;
  }
}
module.exports=CommandResponse;
