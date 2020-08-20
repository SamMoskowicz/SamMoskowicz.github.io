const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
)
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use((req, res, next) => {
  console.log(req.method, req.url, 'NOT FOUND!')
  res.send('NOT FOUND!')
})

app.use((err, req, res, next) => {
  console.log(req.method, req.url, err)
  res.send(err)
})

app.listen(3030, () => console.log('app is listening on port 3030'))
