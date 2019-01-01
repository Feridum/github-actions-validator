import {demoWorkflow} from './demo.workflow'
import {isWorkflowValid} from '../src/'

const result = isWorkflowValid(demoWorkflow)

console.log(result);