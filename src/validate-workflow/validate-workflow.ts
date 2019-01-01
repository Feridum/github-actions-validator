import {validateWorkflowBlock} from './validate-workflow-block/validate-workflow-block'
import {validateActionBlock} from './validate-action-block/validate-action-block'

export const validateWorkflow = (workflow) => {
   return validateWorkflowBlock(workflow.workflowBlock) && validateActionBlock(workflow.actionBlocks);
}