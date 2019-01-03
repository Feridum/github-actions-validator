export const validateBlock = (avaiableAttributes, attributesValues) => {
  
    const checkAttributes = attributes => {
    const atributesArray = Object.keys(attributes);
    if (atributesArray.length > 0) {
      atributesArray.map(attribute => {
        if (!avaiableAttributes.includes(attribute)) {
          throw new Error("Missing requires attribute");
        }
      });

      return true;
    }
    return false;
  };

  const checkValues = attributes => {
    const attributesArray = Object.keys(attributes)
    if(attributesArray.length > 0){
        attributesArray.map(attribute => {
        if (!attributesValues[attribute](attributes[attribute])) {
            throw new Error("Attribute with bad value");
        }
        });
        return true
    }
    return false
  };

  const checkAll = block => {
    return checkAttributes(block.attributes) && checkValues(block.attributes);
  };

  return {
    checkAttributes,
    checkAll,
    checkValues
  };
};
