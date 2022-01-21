import {ADD_ITEM,REMOVE_ITEM,GET_ALL_ITEMS} from '../actions/todosActions'
const initialState={
    items:[]
}
let nextId=0;
const todos=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                items:[...state.items,
                       {id:nextId++,
                        label:action.item}
                    ]
            }

        case REMOVE_ITEM:
            const newItems=state.items.filter((item)=> action.payload!=item.id)
            return {
                ...state,
                items:newItems
            };
        case GET_ALL_ITEMS:
             return {
                 ...state,
                 items: action.payload
             };
        default:
            return state
    }

}
export default todos