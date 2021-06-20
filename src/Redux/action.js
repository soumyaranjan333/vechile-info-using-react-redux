export const DELETE_VECHILE= "DELETE_VECHILE"
export const ADD_VECHILE= "ADD_VECHILE"
export const SORT_SALES= "SORT_SALES"

export function deleteVechile(id){
    return{
        type: DELETE_VECHILE,
        payload:id
    }
}

export function addVechile(vechile){
    return{
        type: ADD_VECHILE,
        payload: vechile
    }
}

export function sortSales(vechile){
    return{
        type: SORT_SALES,
        payload: vechile
    }

}