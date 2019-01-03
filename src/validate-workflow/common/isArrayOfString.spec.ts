import {expect} from 'chai'
import { isArrayOfString } from './isArrayOfStrings';

describe('isArrayOfStrings', ()=>{
    it('return true if array of strings', ()=>{
        expect(isArrayOfString(['a','b'])).to.equal(true)
    })

    it('return false on empty string', ()=>{
        expect(isArrayOfString([])).to.equal(false)
    })

    it('return false if elements are not a string', ()=>{
        expect(isArrayOfString([1,2,3])).to.equal(false);
        expect(isArrayOfString([{},[]])).to.equal(false);
    })

    it('return false if one of element are not a string', ()=> {
        expect(isArrayOfString(['a',1,'b'])).to.equal(false);
        expect(isArrayOfString([[],'a','b'])).to.equal(false);
        expect(isArrayOfString(['a','b', {}])).to.equal(false);
    })
})