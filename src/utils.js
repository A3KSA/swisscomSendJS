// function to validate swiss phone numbers (e.g. +41751234567, +41761234567, +41771234567, +41781234567, +41791234567)
function validateSwissPhoneNumber(number) {
    if (number.match(/^\+41[0-9]{9}$/)) {
        return true;
    }
    return false;
}

// function to convert national phone numbers to international phone numbers (e.g. 0751234567 -> +41751234567)
function phoneNumberToInternationalFormat(number) {
    if (number.match(/^0[0-9]{9}$/)) {
        return '+41' + number.substring(1);
    }
    return number;
}

module.exports = {
    validateSwissPhoneNumber,
    phoneNumberToInternationalFormat
}
