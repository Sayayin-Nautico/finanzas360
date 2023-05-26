const express = require('express');
const routerApi = require('./routes');
const {logErrors,errorHandler, boomErrorHandler} = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.get('/',(req,res)=>{
  res.redirect('/api')
})
app.get('/api',(req,res)=>{
  res.send("Hola mi server en express")

})

app.listen(port,()=>{
  console.log(`Escuchando en http://localhost:${port}`)
})
routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)

app.use(errorHandler)

//Fin de la segunda clase
//Segunda clase: Routing
//¿Que son las api REST(Representational State Transfer)
//Como hacer un GET
//convenciones
//api.expample.com/tasks/{id}/
//api.expample.com/people/{id}/
//api.expample.com/users/{id}/tasks/


