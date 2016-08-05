let {checkedPostcode,buildBarcodes,compositeBarcodes,calculatCheck,printBarcodes} = require('./core')
let {loadAllBarcodes} = require('./barcodes');
class printZipcode{
    go(barcode) {
        let allBarcodes = loadAllBarcodes();
        let formattedBarcode = checkedPostcode(barcode);
        let build = buildBarcodes(formattedBarcode, allBarcodes);
        let composite = compositeBarcodes(build, allBarcodes);
        let check = calculatCheck(composite, allBarcodes);
        return printBarcodes(composite, check);
    }
}
module.exports = printZipcode;
