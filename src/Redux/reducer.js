import {DELETE_VECHILE,ADD_VECHILE,SORT_SALES} from './action'
import {vechileInfo} from './states'

export let reducer = (state = vechileInfo, action) =>{
    // let newVechileInfo;
    switch (action.type) {

        case DELETE_VECHILE:
            let newVechileInfo = [...state];
            newVechileInfo= newVechileInfo.filter(vechile=>{
                return vechile.id!==action.payload
            })
            return newVechileInfo

        case ADD_VECHILE:
            action.payload.id = Math.random();
            console.log(action.payload)
            let vechileInfoAdd = [...state];
            vechileInfoAdd.push(action.payload);
            return vechileInfoAdd;   
    
        case SORT_SALES:
            let vechileInfoSort = [...state]
            vechileInfoSort.sort((a,b)=>a.sales_units-b.sales_units)
            return vechileInfoSort
            
        
    }
    return state;
    
}