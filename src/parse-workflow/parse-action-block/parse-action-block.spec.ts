import { validActionStrings } from '../../test-utils/valid-action-strings';
import { expect } from 'chai';
import { isEqual } from 'lodash';
import { parseActionBlock } from './parse-action-block';

describe('parseActionBlock', ()=>{
    it('parse all valid actions', ()=>{
        validActionStrings.map(action=>{
            expect(isEqual(parseActionBlock(action.action), action.result)).to.equal(true);
        })
    })
})