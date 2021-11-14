const postalCodes = require('./postal-codes');

const pc1 = '900000';
let result = postalCodes.validate('VN', pc1);
if ( result === true ) {
    console.log("Postal code is valid.");
} else {
    console.log(result);
}
