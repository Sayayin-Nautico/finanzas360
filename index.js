const express = require('express');

const app = express()
const cors = require('cors')
const port = 3000
app.get('/',(req,res)=>{
    res.send("Hola mundo que tal?")
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Hola')
})
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
whitelist = ['http://www.localhost:80','http://localhost:3000']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
app.use(cors(corsOptions))
app.listen(port,()=>{
    console.log('listen on port '+port)
})
