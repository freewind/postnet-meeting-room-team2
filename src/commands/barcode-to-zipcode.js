/**
 * Created by xjy on 8/3/16.
 */
let BarcodeToZipcodeCore=require("../barcode-to-zipcode-core");
let barcodeToZipCode=new BarcodeToZipcodeCore();
let CommandResponse=require("./command-response");
class BarcodeToZipCodeCommand {
  action(barcode) {
    let zipCode = barcodeToZipCode.action(barcode);
    if (zipCode === false) {
      return new CommandResponse({
        error: "Please give right input."
      });
    } else {
      return new CommandResponse({
        text: zipCode,
        reset: true
      });
    }
  };
}
module.exports = BarcodeToZipCodeCommand;
