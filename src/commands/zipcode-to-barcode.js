"use strict";
/**
 * Created by xjy on 8/3/16.
 */
let ZipCodeToBarcodeCore=require("../zipcode-to-barcode-core.js");
let zipCodeToBarcode=new ZipCodeToBarcodeCore();
let CommandResponse=require("./command-response");
class ZipCodeToBarcodeCommand {
  action(zipcode) {
    let barcode = zipCodeToBarcode.action(zipcode);
    if (barcode === false) {
      return new CommandResponse({
        error: 'Please give right input.',
      });
    } else {
      return new CommandResponse({
        text: barcode,
        reset: true
      });
    }
  };
}
module.exports=ZipCodeToBarcodeCommand;
