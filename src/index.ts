import {parseWorkflow} from './parse-workflow/parse-workflow';
import {validateWorkflow} from './validate-workflow/validate-workflow';

export const isWorkflowValid = (workflow) => {
    try{
        const parsedWorkflow = parseWorkflow(workflow)
        const validation = validateWorkflow(parsedWorkflow)
        return validation;
    }catch(e){
        return false
    }
    
}
