var Userdb = require('../model/model')

//create and save the user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be loaded"})
        return;
    }
    const user = new Userdb({
        img:req.body.img,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone
    })
    user.save(user).then(data=>{
        res.redirect('/add-user')
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message||"Some error occured while creating a create operation"
        });
    });


}

exports.find = (req,res)=>{

}

exports.update = (req,res)=>{

}

exports.delete = (req,res)=>{

}