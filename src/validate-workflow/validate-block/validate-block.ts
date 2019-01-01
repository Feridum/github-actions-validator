
export const validateBlock = (avaiableAttributes, attributesValues)=>{
    const checkAttributes = (attributes) => {
        Object.keys(attributes).map(attribute=>{
            if(!avaiableAttributes.includes(attribute)){
                throw new Error('Missing requires attribute');
            }
        })
    }
    
    
    const checkValues = (attributes) => {
        Object.keys(attributes).map(attribute=>{
            if(!attributesValues[attribute](attributes[attribute])){
                throw new Error('Attribute with bad type');
            }
        })
    }
    
    const checkAll = (block) => {
        checkAttributes(block.attributes);
        checkValues(block.attributes);

        return true;
    }

    return {
        checkAttributes, 
        checkAll,
        checkValues
    }
}