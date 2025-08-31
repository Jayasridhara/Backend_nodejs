const controller={
    index:(req,res)=>{
      res.json({message:"Hello Express Contoller"})
}

}

module.exports={
    index:controller.index,
    
}