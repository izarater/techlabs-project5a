import api from "../api/api";


export default {
  loginWithEmail: async (email, password) => {// no usar, no se encuentra implementado
    if(!email || !password){
      return { result: "email and Password are required"}
    }
    try {
      
      const result = await api.post('/authentication/signin',{
      
      })
    } catch (error) {
      return { result: error }
    }
  },
  loginWithUsername: async (username, password) => { 
    
    if(!username || !password) { // se valida que se hallan pasado los parametros necesarios
      return { result: "Username and password are required"}
    }
    
    try {
      
      const result = await api.post('/authentication/signin', {
        username,
        password
      })
      if(result.message) // se valida que no halla salido error desde la base de datos, cuando llega un dato con key 'message' significa que no se llego a lo esperado
        return { result: result.message }
      return { completeAuth: true, result: result.data}// el resultado exitoso vendra en el dato de result
    } catch (error) {
      return { result: error.response.data}
    }
  },

  getListRoles: async () => {
    try {
      const list = await api.get('/authentication/list-roles')
      return { list: Object.values(list.data) }
    } catch (error) {
      return { error }
    }
  },

  register: async (data, rol) => {

    try {
      const result = await api.post(`/authentication/signup/${rol}`, data)
      return result.data
    } catch (error) {
      if(error.result)
        return {result: error.result.data}
      return error.response.data
    }
  },

  registerWithRol: async (data, rol) => {

    try {
      const result = await api.post('/authentication/signup', data)
      return result.data
    } catch (error) {
      if(error.result)
        return {result: error.result.data}
      return error.response.data
    }
  },

  changePassword: async (data) => {
    try {
      const result = await api.post('/authentication/changePassword', data)
      return result.data
    } catch (error) {
      return { error }
    }
  }
}

