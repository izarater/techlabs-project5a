import api from "../api/api";

export default {
  listTypes : async () => {
    try {
      const list = await api.get('/products/list-types')
      
      return { data: list.data }
    } catch (error) {
      return { error}
    }
  },
  newProduct :  async (dataNewProduct) => {
    const {
      username,
      password,
      product_type,
      product_name,
      description,
      elaboration_date,
    }= dataNewProduct
    try {
      const result = await api.post('/products/new-product', {
        username,
        password,
        product_type,
        product_name,
        description,
        elaboration_date,
      })
      

      return { data: result.data, message: result.message }
    } catch (error) {
      // console.log(error.response.data)
      // console.log(error.response.data.message)
      return { message: error.response.data.message}
    }
  }
}