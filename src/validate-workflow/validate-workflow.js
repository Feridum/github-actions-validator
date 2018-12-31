const {validateWorkflowBlock} = require('./validate-workflow-block/validate-workflow-block')
const {validateActionBlock} = require('./validate-action-block/validate-action-block')

const validateWorkflow = (workflow) => {
   return validateWorkflowBlock(workflow.workflowBlock) && validateActionBlock(workflow.actionBlocks);
}

module.exports = {
    validateWorkflow
}