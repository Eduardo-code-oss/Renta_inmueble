const { user } = require("../models");
const db = require("../models");
const User = db.user;

exports.create = (req,res) => {
    if(!req.body.name)
        {
        res.status(400).send({mesaage: "Need add name for insert new user"});
        return;
        }
    const userDetail = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    userDetail.save(userDetail).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message: err.message || "error"})
    })
};


//traer usuario solo id y nombre
exports.findbyID = (req,res) => {
    const id = req.params.id;
      User.findById(id)
        .then(datos => {

            var datos = {
                id : datos._id,
                nombre : datos.name,
                email : datos.email
            };
        if (!datos)      
        res.status(404).send({ message: "Not found user with id " + id });
        else res.send(datos);
    })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Error retrieving user with id=" + id
          });
        })
    };