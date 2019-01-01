import {AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES} from './constraints'
import {validateBlock} from '../validate-block/validate-block'

const {checkAll} = validateBlock(AVAIABLE_ATTRIBUTES, ATTRIBUTES_VALUES)

export const validateActionBlock = (actions)=>{
   actions.map(checkAll);

   return true;
}
