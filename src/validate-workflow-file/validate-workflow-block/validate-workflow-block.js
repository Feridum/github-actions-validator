const {AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES} = require('./constraints')
const {checkAll} = require('../validate-block/validate-block')(AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES)

const validateWorkflowBlock = (workflowBlock)=>{
   return checkAll(workflowBlock)
}




module.exports = {
    validateWorkflowBlock
}