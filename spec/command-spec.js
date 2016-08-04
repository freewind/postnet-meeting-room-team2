/**
 * Created by zhuoyue on 16-8-4.
 */
let barToZipCommand=require('../commands/bar-to-zip-command');
let gotoBarToZipCommand=require('../commands/goto-bar-to-zip-command');
let gotoMainPageCommand=require('../commands/goto-main-page-command');
let gotoZipToBarCommand=require('../commands/goto-zip-to-bar-command');
let invalidCommand=require('../commands/invalid-command');
let ZipToBarCommand=require('../commands/zip-to-bar-command')
describe('command spec',()=>{
    it('bar to zip command true',()=>{
        let barToZip=new barToZipCommand();
        let resultText = barToZip.transform('12345').text;
        let resultReset = barToZip.transform('12345').reset;
        expect(resultText).toEqual('translateResult is :  |:::||::|:|::||::|::|:|:|::|:|:|');
        expect(resultReset).toEqual(true);
    });
    it('bar to zip command false',()=>{
        let barToZip=new barToZipCommand();
        let resultError = barToZip.transform('1234').error;
        expect(resultError).toEqual('Please give right input');
    });
    it('goto Bar To Zip Command',()=>{
        let barToZip=new gotoBarToZipCommand();
        let result=barToZip.do();
        let expected='Please input bar code:';
        expect(result.text).toEqual(expected);
    });
    it('goto Main Page Command',()=>{
        let gotoMainPage=new gotoMainPageCommand();
        let result=gotoMainPage.do();
        let expected= `
1. Translate zip code to bar code
2. Translate bar code to zip code
3. Quit
Please input your choices(1~3)`;
        expect(result.text).toEqual(expected);
    });
    it('goto Zip To Bar ',()=>{
        let zipToBar=new gotoZipToBarCommand();
        let result=zipToBar.do();
        let expected='Please input zip code:';
        expect(result.text).toEqual(expected);
    });

    it('invalid input',()=>{
        let invalid=new invalidCommand();
        let result=invalid.do();
        let expected='Please give right input';
        expect(result.error).toEqual(expected);
    });
    it('zip To Bar Command true',()=>{
        let zipToBar=new ZipToBarCommand();
        let resultText = zipToBar.transform('|:::||::|:|::||::|::|:|:|::|:|:|').text;
        let resultReset = zipToBar.transform('|:::||::|:|::||::|::|:|:|::|:|:|').reset;
        expect(resultText).toEqual('translateResult is :  12345');
        expect(resultReset).toEqual(true);
    });
    it('zip To Bar Command false',()=>{
        let zipToBar=new ZipToBarCommand();
        let result= zipToBar.transform('|:::||::|:|::|::|::|:|:|::|:|:|').error;
        expect(result).toEqual('please input right input');
    });
});