import marketService from "../../services/marketService"

const data = [

]


const GET_MARKET = "GET_MARKET"
const GET_MARKET_ERROR = "GET_MARKET_ERROR"


export default function marketReducer(state = data, action){
  switch (action.type) {
    case GET_MARKET:
      return {
        ...state,
        errorRes: undefined,
        market: action.payload
      }
    case GET_MARKET_ERROR:
      return {
        ...state,
        market: undefined,
        errorRes: action.payload
     
      }
  }
  return state
}


export const marketActions = () => async (dispatch, getState) => {
  try {
    const market = await marketService.productData() 
    //console.log(market.data)
    if(market.error){
      dispatch({
        type: GET_MARKET_ERROR,
        payload: market.error
      })
    }
    dispatch({
      type: GET_MARKET,
      payload: market
    })
  } catch (error) {
    dispatch({
      type: GET_MARKET_ERROR,
      payload: error
    })
  }
}