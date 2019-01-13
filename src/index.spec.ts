import { demoWorkflow } from "./test-utils/demo.workflow";
import { expect } from "chai";
import {isWorkflowValid} from '.'

describe('whole validator test', ()=>{
    it('validate example workflow file', ()=>{
        expect(isWorkflowValid(demoWorkflow)).to.equal(true)
    })
    it('reaturn false on empty file', ()=>{
        expect(isWorkflowValid('')).to.equal(false)
    })
})