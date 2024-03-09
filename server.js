const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const port = 8080

app.get('/', (req, res) => {
  res.sendFile("wayscript.html", { root: path.join(__dirname) })
})

app.get('/api', async (req, res) => {
  //    let r= axios.get("https://newsapi.org/v2/everything?q=Apple&from=2023-04-30&sortBy=popularity&apiKey=6b439b65382b4484a2e189412cc23b92")
  //   res.json(r)
  console.log(req._parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?" + req._parsedUrl.query
  let r = await axios(url)
  let a = r.data
  res.json(a)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
