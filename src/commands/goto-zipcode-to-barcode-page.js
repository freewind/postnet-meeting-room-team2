/**
 * Created by xjy on 8/3/16.
 */
"use strict";
let ZipCodeToBarcodeCommand=require('./zipcode-to-barcode');
let zToB=new ZipCodeToBarcodeCommand();
let CommandResponse=require("./command-response");
class GoZipCodeToBarcodeCommand {
  action() {
    return new CommandResponse({
      text: "Please input zip code.",
      newMapping: {
        "*":zToB.action
        // new ZipCodeToBarcodeCommand()
        //
      }
    });
  }
}
module.exports=GoZipCodeToBarcodeCommand;
