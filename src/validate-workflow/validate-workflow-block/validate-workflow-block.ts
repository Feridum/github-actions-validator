import {AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES} from './constraints'
import {validateBlock} from '../validate-block/validate-block'

const {checkAll} = validateBlock(AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES)

export const validateWorkflowBlock = (workflowBlock)=>{
   return checkAll(workflowBlock)
}
