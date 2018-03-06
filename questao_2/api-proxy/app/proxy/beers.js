const axios = require('axios')
const apiUrl = "https://api.punkapi.com/v2/beers"

class beersProxy {
    constructor(params) {
        console.log("Proxy params -->", params)
        this.params = params;
    }

    getBeers() {
      return axios.get(apiUrl, { params: this.params })
      .then( (response) => {
        console.log("Sucessful call -->")
        return response.data
      })

   }
}

module.exports = beersProxy;
