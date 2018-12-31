

const parseWorkflowBlock = (workflow) =>{

const workflowReg = /^workflow\s(?<name>".+")\s?{\n(?<actions>(.+\n|.+)+)}/gm

const parseWorkflow = workflowReg.exec(workflow);

const workflowResult = {
    name: '',
    attributes: {},
}
workflowResult.name = JSON.parse(parseWorkflow.groups.name);

let cleanAction = parseWorkflow.groups.actions.replace(/ /g, '').replace(/\[\n/g, '[').replace(/\n\]\n*/g, ']').replace(/,\n/g, ',')

const attributesWithValues = cleanAction.split(/\[{0}\n/);

attributesWithValues.map(attributeWithValue =>{
    const [attribute, value] = attributeWithValue.split(/\s*\=\s*/);
    workflowResult.attributes[attribute] = JSON.parse(value);
})

return workflowResult;
}

module.exports = {
    parseWorkflowBlock
}