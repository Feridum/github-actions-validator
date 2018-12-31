const {isArray, isString} = require('lodash');

const isArrayOfString = (value) =>{
    try{
        if(isArray(value)){
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


module.exports ={
    isArrayOfString,
}