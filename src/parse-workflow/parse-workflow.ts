import {parseActionBlock} from './parse-action-block/parse-action-block'
import {parseWorkflowBlock} from './parse-workflow-block/parse-workflow-block'


export const parseWorkflow = (workflow)=>{

    const findWorkflowReg = /^workflow\s?".+"\s?{\n(?<action>(.+\n|.+)+)}/gm;
    const findActionsReg = /^action\s?".+"\s?{\n?(?<action>(.+\n|.+)+)}/gm;
    
    const matchActions = workflow.match(findActionsReg)
    const matchWorkflow = workflow.match(findWorkflowReg)
    
    return {
        workflowBlock: parseWorkflowBlock(matchWorkflow),
        actionBlocks:  matchActions.map(action=>parseActionBlock(action))
    }

}