import axios from "axios";

export default {
  getListCountries: async () => {
    try {
      await axios.get(url)
    } catch (error) {
      return {error}
    }
  }
}