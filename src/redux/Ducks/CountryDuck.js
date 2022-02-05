
const data = {

}


const GET_LIST_COUNTRIES_SUCCESS = 'GET_LIST_COUNTRIES_SUCCESS'
const GET_LIST_COUNTRIES_FAIL = 'GET_LIST_COUNTRIES_FAIL'



export default function countryReducer(state = data){
  switch (action.type){
    case GET_LIST_COUNTRIES_FAIL:
      return {
        ...state,
        countries: undefined,
        errorCountries: action.payload
      }
    case GET_LIST_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        errorCountries: undefined
      }
    default:
      return state
  }
}



// zona de acciones

export const getListCountriesAction=()=>async (dispatch, getState)=>{
  try {
    
  } catch (error) {
    dispatch({
      type: GET_LIST_COUNTRIES_FAIL,
      payload: error
    })
  }

}