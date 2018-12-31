const parseActionBlock = (action) =>{
    const actionReg = /^action\s(?<name>".+")\s?{\n(?<actions>(.+\n|.+)+)}/gm

    const parseAction = actionReg.exec(action);


    const actionResult = {
        name: '',
        attributes: {},
    }
    actionResult.name = JSON.parse(parseAction.groups.name);

    let cleanAction = parseAction.groups.actions
    .replace(/ /g, '')
    .replace(/\[\n/g, '[')
    .replace(/\n\]\n*/g, ']')
    .replace(/,\n/g, ',')
    .replace(/\n$/,'')


    const cleanActionWitoutEnv = cleanAction
    .replace(/(?<=env={)(.|\n)+(?=\s\})/, '')
    .replace(/env={\n}/, '')

    const env = /(?<=env={)(.|\n)+(?=\s\})/.exec(cleanAction)
    if(env){
        const parseEnv = env[0].replace(/\n/g, ',').replace(/^,/, '').replace(/\=/g, ':');
        cleanAction = cleanActionWitoutEnv + `env={${parseEnv}}`
    }

    const attributesWithValues = cleanAction.split(/\[{0}\n/);

    attributesWithValues.map(attributeWithValue =>{
        const [attribute, value] = attributeWithValue.split(/\s*\=\s*/);
        if(attribute === 'env'){
            const parseValue = value
            .replace(/\{/, '{"')
            .replace(/\:/g, '":')
            .replace(/,/g,',"')
            actionResult.attributes[attribute] = JSON.parse(parseValue);
        }else {
            actionResult.attributes[attribute] = JSON.parse(value);
        }
    })

    return actionResult;
}

module.exports = {
    parseActionBlock
}