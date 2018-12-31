const {AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES} = require('./constraints')
const {checkAll} = require('../validate-block/validate-block')(AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES)

const validateActionBlock = (actions)=>{
   actions.map(checkAll);

   return true;
}

module.exports = {
    validateActionBlock
}