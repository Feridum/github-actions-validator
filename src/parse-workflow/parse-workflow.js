const {parseActionBlock} = require('./parse-action-block/parse-action-block')
const {parseWorkflowBlock} = require('./parse-workflow-block/parse-workflow-block')


const parseWorkflow = (workflow)=>{

    const findWorkflowReg = /^workflow\s?".+"\s?{\n(?<action>(.+\n|.+)+)}/gm;
    const findActionsReg = /^action\s?".+"\s?{\n?(?<action>(.+\n|.+)+)}/gm;
    
    const matchActions = workflow.match(findActionsReg)
    const matchWorkflow = workflow.match(findWorkflowReg)
    
    return {
        workflowBlock: parseWorkflowBlock(matchWorkflow),
        actionBlocks:  matchActions.map(action=>parseActionBlock(action))
    }

}


module.exports = {
    parseWorkflow
}