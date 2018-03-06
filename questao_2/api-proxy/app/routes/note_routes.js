const beersProxy = require('../proxy/beers')

module.exports = function(app, db) {
  app.get('/', (req, res) => {
    let response = {
      message: 'Hi, Welcome to api proxy reload?'
    }
    res.send(response)
  });

  app.get('/proxy/beer/:abv_gt/:abv_lt/:ibu_gt/:ibu_lt/:ebc_gt/:ebc_lt/:beer_name', (req, res) => {

    let proxy = new beersProxy(req.params)

    proxy.getBeers()
    .then( (beerList) => {
      console.log("beersList -->")
      response = { beerList: beerList}
      res.send(response)
    })
    .catch( (err) => {
      console.log("Axios err: ", err)
      res.send({ error: err})
    })

  })
}
