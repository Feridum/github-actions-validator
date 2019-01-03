import {isArray, isString} from 'lodash';

export const isArrayOfString = (value) =>{
    try{
        if(isArray(value) && value.length > 0){
            value.map(item=>{
                if(!isString(item)){
                    throw new Error('not a string')
                }
            })
            return true;
        }
        return false
    }catch(e){
        return false
    }
    
}