const {demoWorkflow} = require('../demo/demo.workflow')
const {parseWorkflow} = require('./parse-workflow/parse-workflow')
const {validateWorkflow} = require('./validate-workflow-file/validate-workflow')



const isWorkflowValid = (workflow) => {
    const parsedWorkflow = parseWorkflow(workflow)
    const validation = validateWorkflow(parsedWorkflow)

    return validation
}

module.exports = {
    isWorkflowValid
}