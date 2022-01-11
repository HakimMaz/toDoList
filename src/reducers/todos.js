const initialState={
    items:[
        {id:1,label:'hello'},
        {id:2,label:'good morning'},
        {id:3,label:'done'}
    ]
}
let nextId=4;
const todos=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            console.log(" item", action.item)
            return {
                ...state,
                items:[...state.items,
                       {id:nextId++,
                        label:action.item}
                    ]
            }

        case 'REMOVE_ITEM':
            const newItems=[...state.items];

            return {
                ...state,
                items:newItems.filter((item)=>{item.id1!=action.id})
            };

        default:
            return state
    }

}
export default todos