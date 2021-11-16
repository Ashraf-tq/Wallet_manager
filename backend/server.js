const express = require('express')
const app = express()
const port = 3000
const users = require('./data/users.json')
app.get('/', (req, res) => {
  res.send('OK!')
})

app.get('/api/users',(req,res)=>{
res.send(users)
})

app.put('/api/users/put',(req,res)=>{
  res.send("put")
  
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})