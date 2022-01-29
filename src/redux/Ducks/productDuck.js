import productService from "../../services/productService"
import Swal from 'sweetalert2'

const data = {

}


const GET_LIST_TYPES = "GET_LIST_TYPES"
const GET_LIST_TYPES_ERROR = "GET_LIST_TYPES_ERROR"

const CREATE_NEW_PRODUCT_SUCCESS = "CREATE_NEW_PRODUCT_SUCCESS"
const CREATE_NEW_PRODUCT_FAIL = "CREATE_NEW_PRODUCT_FAIL"


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
    case CREATE_NEW_PRODUCT_SUCCESS:
      const list = state.listOwnProducts
      if(!list){
        return {
          ...state,
          listOwnProducts: [action.payload]
        }
      }
      list.push(action.payload)
      return {
        ...state,
        listOwnProducts: list
      }
    case CREATE_NEW_PRODUCT_FAIL:
      return state
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

export const newProductAction = (dataNewProduct) => async (dispatch, getState) => {
  const {
    username,
    password,
    tags,
    name,
    quantity,
    src,
    alt,
    description,
    elaboration_date,
  }= dataNewProduct
  try {
    const result = await productService.newProduct({
      username,
      password,
      tags,
      name,
      quantity,
      src,
      alt,
      description,
      elaboration_date,
    })
    if(result.message){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.message,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      dispatch({
        type: CREATE_NEW_PRODUCT_FAIL
      })
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Perfect',
        text: "the product was created succesfully",
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      dispatch({
        type: CREATE_NEW_PRODUCT_SUCCESS,
        payload: result.data
      })
    }

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "there was an error in the creation of the new product",
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    dispatch({
      type: CREATE_NEW_PRODUCT_FAIL
    })
  }
}