import axios from 'axios'

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

const url ='https://fullstack-todo-app-api.vercel.app/todos'

export const getAllItems = () => {
    return async function (dispatch) {
      
      try {
        const result= await axios.get(url);
        console.log("result: " , result.data)
        await dispatch({
          type: GET_ALL_ITEMS,
          payload: result.data,
        })
  
      } catch (error) {
        console.log(error)
      }
    }
  }
export function addItem (item){



}

export const removeItem = (id)=>{
    return async function (dispatch) {
      
        try {
            console.log('calling step 2',id)
          const result= await axios.delete(url+`/${id}`);
          console.log("result: " , result.data)
          await dispatch({
            type: REMOVE_ITEM,
            payload: id,
          })
    
        } catch (error) {
          console.log(error)
        }
      }
}
