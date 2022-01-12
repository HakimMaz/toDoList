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
            console.log(" state ", state.items);
            console.log("action", action.id)
            const newItems=state.items.filter((item)=> action.id!=item.id)
            console.log(" id ", newItems)

            return {
                ...state,
                items:newItems
            };

        default:
            return state
    }

}
export default todos