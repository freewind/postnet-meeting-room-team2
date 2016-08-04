"use strict";
let MainPage = require('../src/commands/goto-main-page');
console.log(MainPage);
let GoZipCodeToBarcodeCommand = require("../src/goto-zipcode-to-barcode-page");
let zipCodeToBarcode=new GoZipCodeToBarcodeCommand();

let GoBarcodeToZipCodeCommand = require("../src/goto-barcode-to-zipcode-page");
let barcodeToZipCode=new GoBarcodeToZipCodeCommand();

let ZipCodeToBarcodeCommand=require('./zipcode-to-barcode');
let zToB=new ZipCodeToBarcodeCommand();

describe("commands-test",()=>{
  it("#No.1 goto-main-page",()=>{
    let print=new MainPage().action().text;
    let expectText=`1. Translate zip code to bar code
       2. Translate bar code to zip code
       3. Quit
       Please input your choices(1~3)`;
    expect(print).toEqual(expectText);
  });
  it("# No.2 goto-zipcode-to-barcode-page ",()=>{
    let print=zipCodeToBarcode.action().text;
    let expectText="Please input zip code.";
    expect(print).toEqual(expectText);
  });
  it("# No.3 goto-barcode-to-zipcode-page ",()=>{
    let print=barcodeToZipCode.action().text;
    let expectText="Please input bar code.";
    expect(print).toEqual(expectText);
  });
  it("# No.4 zipcode-to-barcode-command ",()=>{
    let zipcode='95713';
    let print=zToB.action(zipcode).text;
    let expectText='||:|:::|:|:|:::|:::||::||::|:|:|';
    expect(print).toEqual(expectText);
  });
});
