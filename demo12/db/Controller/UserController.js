const { request } = require("http");
const db = require("../models");
const Products=db.Product;

//http://localhost:3500/api/user
exports.findAll=(req,resp)=>{
    Products.findAll()
        .then(data=>{resp.send(data)})   
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}
//http://localhost:3500/api/user/7889
exports.findOne=(req,resp)=>{
    const id=req.params.id
    Products.findByPk(id)
        .then(data=>{resp.send(data)})   
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}
//http://localhost:3500/api/user/7889
exports.delete=(req,resp)=>{
    const id=req.params.id
    Products.destroy({where: {id:id} })
        // .then(data=>{resp.send(data)})   
        .then(num=>{
            if(num==1){
                resp.send("record of id="+id+" is successfully delated");
            }else{
                resp.send("can not delete record for id="+id);
            }

        })
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}



exports.create=(req,resp)=>{

    // Validate request
  if (!req.body.pid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
    //read data from the request
    const newProduct={
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        createdAt: new Date(),
        updatedAt: new Date()
    }
 Products.create(newProduct)
        .then(data=>{resp.send(data)})   
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 
}



    


