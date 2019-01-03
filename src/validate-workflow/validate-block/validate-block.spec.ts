import { validateBlock } from './validate-block';
import { expect } from 'chai';

const ATTRIBUTES = [
    'foo',
    'doo'
];

describe('validate-block',()=>{
    describe('checkAttributes', ()=> {
        it('return true if attributes are allowed', ()=>{
            const {checkAttributes} = validateBlock(ATTRIBUTES, {});
    
            expect(checkAttributes({foo:'foo'})).to.equal(true);
            expect(checkAttributes({foo:'foo', doo:'doo'})).to.equal(true);
        })
    
        it('throw error when attribute is not allowed', ()=>{
            const {checkAttributes} = validateBlock(ATTRIBUTES, {});
    
            expect(()=>checkAttributes({foo1:'foo'})).to.throw(Error);
            expect(()=>checkAttributes({foo:'foo', doo1:'doo'})).to.throw(Error);
        })
    
        it('return false attributes are empty object', ()=>{
            const {checkAttributes} = validateBlock(ATTRIBUTES, {});
    
            expect(checkAttributes({})).to.equal(false);
        })
    })

    describe('checkValues', ()=>{
        it('return true if all passed methods return true', ()=>{
            const {checkValues} = validateBlock(ATTRIBUTES, {foo: ()=>true, doo: ()=>true});
            
            expect(checkValues({foo:'foo'})).to.equal(true);
            expect(checkValues({foo:'foo', doo:'doo'})).to.equal(true);
        })

        it('throw Error if one of method return false', ()=>{
            const {checkValues} = validateBlock(ATTRIBUTES, {foo: ()=>false, doo: ()=>true});
            
            expect(()=>checkValues({foo:'foo'})).to.throw(Error);
            expect(()=>checkValues({foo:'foo', doo:'doo'})).to.throw(Error);
        })

        it('return false is passed attributes object is empty',()=>{
            const {checkValues} = validateBlock(ATTRIBUTES, {});
            
            expect(checkValues({})).to.equal(false);
        })
    })

    describe('checkAll', ()=>{
        it('return true if everything is ok', ()=>{
            const {checkAll} = validateBlock(ATTRIBUTES, {foo: ()=>true, doo: ()=>true});
            
            expect(checkAll({attributes:{foo:'foo'}})).to.equal(true);
            expect(checkAll({attributes:{foo:'foo', doo:'doo'}})).to.equal(true);
        })

        it('throw Error if one of method return false', ()=>{
            const {checkAll} = validateBlock(ATTRIBUTES, {foo: ()=>false, doo: ()=>true});
            
            expect(()=>checkAll({attributes:{foo:'foo'}})).to.throw(Error);
            expect(()=>checkAll({attributes:{foo:'foo', doo:'doo'}})).to.throw(Error);
        })

        it('throw error when attribute is not allowed', ()=>{
            const {checkAll} = validateBlock(ATTRIBUTES, {});

            expect(()=>checkAll({attributes:{foo1:'foo'}})).to.throw(Error);
            expect(()=>checkAll({attributes:{foo:'foo', doo1:'doo'}})).to.throw(Error);
        })

        it('false if one of check is false', ()=>{
            const {checkAll} = validateBlock(ATTRIBUTES, {foo: ()=>true, doo: ()=>true});
            
            expect(checkAll({attributes:{}})).to.equal(false);
        })
    })
})
