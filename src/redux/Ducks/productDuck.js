import productService from "../../services/productService"

const data = {

}


const GET_LIST_TYPES = "GET_LIST_TYPES"
const GET_LIST_TYPES_ERROR = "GET_LIST_TYPES_ERROR"


export default function productReducer(state = data, action){
  switch (action.type) {
    case GET_LIST_TYPES:
      return {
        ...state,
        errorList: undefined,
        listTypes: action.payload
      }
    case GET_LIST_TYPES_ERROR:
      return {
        ...state,
        listTypes: undefined,
        errorList: action.payload
      }
    default:
      return state
  }
}


export const listTypesActions = () => async (dispatch, getState) => {
  try {
    const list = await productService.listTypes() 
    if(list.error){
      dispatch({
        type: GET_LIST_TYPES_ERROR,
        payload: list.error
      })
    }
    dispatch({
      type: GET_LIST_TYPES,
      payload: list.data
    })
  } catch (error) {
    dispatch({
      type: GET_LIST_TYPES_ERROR,
      payload: error
    })
  }
}