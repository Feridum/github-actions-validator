
const {parseWorkflow} = require('./parse-workflow/parse-workflow')
const {validateWorkflow} = require('./validate-workflow-file/validate-workflow')



const isWorkflowValid = (workflow) => {
    try{
        const parsedWorkflow = parseWorkflow(workflow)
        const validation = validateWorkflow(parsedWorkflow)
        return validation;
    }catch(e){
        return false
    }
    
}

module.exports = {
    isWorkflowValid
}