const {isString} = require('lodash')
const {isArrayOfString} = require('../common/isArrayOfStrings');

const ON = 'on';
const RESOLVES = 'resolves';

const AVAIABLE_ATTRIBUTES = [ON, RESOLVES]

const ATTRIBUTES_VALUES = {
    [ON]: (value)=>isString(value),
    [RESOLVES]: (value) => isString(value) || isArrayOfString(value)
}


module.exports = {
    ON, RESOLVES, AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES
}