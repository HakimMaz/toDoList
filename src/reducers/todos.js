const initialState={
    items:[]
}
let nextId=0;
const todos=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                items:[...state.items,
                       {id:nextId++,
                        label:action.item}
                    ]
            }

        case 'REMOVE_ITEM':
            const newItems=state.items.filter((item)=> action.id!=item.id)
            return {
                ...state,
                items:newItems
            };

        default:
            return state
    }

}
export default todos