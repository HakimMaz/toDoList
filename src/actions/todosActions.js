import axios from 'axios'

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

const url ='https://fullstack-todo-app-api.vercel.app/todos'

export const getAllItems = () => {
    return async function (dispatch) {
      
      try {
        const result= await axios.get(url);
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
    let body={title:item}
    return async function (dispatch) {
      
        try {
          const result= await axios.post(url,body);
          console.log({result})
          await dispatch({
            type: ADD_ITEM,
            payload: result.data,
          })
    
        } catch (error) {
          console.log(error)
        }
      }
    }

export const removeItem = (id)=>{
    return async function (dispatch) {
      
        try {
          await axios.delete(url+`/${id}`);
          await dispatch({
            type: REMOVE_ITEM,
            payload: id,
          })
    
        } catch (error) {
          console.log(error)
        }
      }
}
