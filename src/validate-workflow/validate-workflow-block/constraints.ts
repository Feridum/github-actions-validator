import {isString} from 'lodash'
import {isArrayOfString} from '../common/isArrayOfStrings'

const ON = 'on';
const RESOLVES = 'resolves';

export const AVAIABLE_ATTRIBUTES = [ON, RESOLVES]

export const ATTRIBUTES_VALUES = {
    [ON]: (value)=>isString(value),
    [RESOLVES]: (value) => isString(value) || isArrayOfString(value)
}