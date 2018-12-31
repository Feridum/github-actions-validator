const {demoWorkflow} = require('./demo.workflow')
const {isWorkflowValid} = require('../src')

const result = isWorkflowValid(demoWorkflow)

console.log(result);