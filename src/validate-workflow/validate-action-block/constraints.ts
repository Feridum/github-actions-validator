import { isString, isObject } from 'lodash'
import { isArrayOfString } from '../common/isArrayOfStrings'

const USES = 'uses';
const NEEDS = 'needs';
const RUNS = 'runs';
const ARGS = 'args';
const ENV = 'env';
const SECRETS = 'secrets';


export const AVAIABLE_ATTRIBUTES = [USES, NEEDS, RUNS, ARGS, ENV, SECRETS]

export const ATTRIBUTES_VALUES = {
    [USES]: (value) => isString(value),
    [NEEDS]: (value) => isString(value) || isArrayOfString(value),
    [RUNS]: (value) => isString(value),
    [ARGS]: (value) => isString(value) || isArrayOfString(value),
    [ENV]: (value) => isObject(value),
    [SECRETS]: (value) => isArrayOfString(value),
}