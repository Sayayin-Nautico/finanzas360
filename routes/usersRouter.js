const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
  const {limit,offset} = req.query;
  if(limit && offset ){
    res.json({
      limit,
      offset,
    })
  }else {
    res.send('No hay parametros')
  }

})
router.post('/',(req,res)=>{
  const body = req.body;

  res.json({
    message:"Created",
    data: body,
  })
})
router.patch("/:id",(req,res)=>{
  const {id} = req.params
  const body = req.body;
  res.json({
    message: "Updated",
    data: body,
    id: id
  })
})
router.delete("/:id",(req,res)=>{
  const {id} = req.params
  res.json({
    message: "Deleted",
    id: id
  })
})
module.exports = router
