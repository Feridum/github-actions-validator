import { expect } from 'chai';
import { isEqual } from 'lodash';
import { parseWorkflowBlock } from './parse-workflow-block';
import { validWorkflowStrings } from '../../test-utils/valid-workflow-strings';

describe('parseWorkflowBlock', ()=>{
    it('parse all valid actions', ()=>{
        validWorkflowStrings.map(action=>{
            expect(isEqual(parseWorkflowBlock(action.workflow), action.result)).to.equal(true);
        })
    })
})