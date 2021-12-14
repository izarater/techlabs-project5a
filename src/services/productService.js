import api from "../api/api";

export default {
  listTypes : async () => {
    try {
      const list = await api.get('/products/list-types')
      
      return { data: list.data }
    } catch (error) {
      return { error}
    }
  }
}