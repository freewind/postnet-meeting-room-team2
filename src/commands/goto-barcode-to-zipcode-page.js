// /**
let BarcodeToZipCodeCommand=require("./barcode-to-zipcode");
let bToZ=new BarcodeToZipCodeCommand();
let CommandResponse=require("./command-response");
class GoBarcodeToZipCodeCommand {
  action() {
    return new CommandResponse({
      text: "Please input bar code.",
      newMapping: {
        '*':bToZ.action
        //new BarcodeToZipCodeCommand()// bToZ.action
      }
    });
  }
}
module.exports = GoBarcodeToZipCodeCommand;
