const db = require("../models");
const House =  db.house;


exports.create = (req,res)=>{
    if(!req.body.tipoDep){
        res.status(400).send({message: "Need add tipo for insert new departament"});
        return;
    }
    const houseDetail = new  House({
        tipoDep : req.body.tipoDep,
        link : req.body.link,
        foto : req.body.link,
        telDep : req.body.telDep,
        arrendatario : req.body.arrendatario,
        reqDep : req.body.reqDep,
        dirDep: req.body.dirDep,
        costDep: req.body.costDep,
        deposDep : req.body.deposDep,
        costDepos : req.body.costDepos,
        manteDep : req.body.manteDep,
        costMante : req.body.costMante,
        obsMante : req.body.obsMante,
        cita : req.body.cita,
        estructura : req.body.estructura,
        amueblado : req.body.amueblado,
        estacionamiento: req.body.estacionamiento,
        noEsta : req.body.noEsta,
        obsGral : req.body.obsGral,
        statusDep : req.body.statusDep,
        idUser : req.body.idUser
    });

    houseDetail.save(houseDetail).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message: err.message || "error"})
    })
};

//buscar todos los documentos de la DB
exports.findAll = (req, res) => {
    const title = req.query.title;
    const id = req.params.id;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    House.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving departament."
        });
      });
  };

  //buscar solo un documento de la DB
  exports.findbyID = (req,res) => {
    const id = req.params.id;
    
      House.findById(id)
        .then(data => {
        if (!data)
        res.status(404).send({ message: "Not found departament with id " + id });
        else res.send(data);
    })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Error retrieving departament with id=" + id
          });
        })
    };

    //actualizar un documento por id

    exports.update = (req, res) => {
        if (!req.body) {
          return res.status(400).send({
            message: "Data to update can not be empty!"
          });
        }
      
        const id = req.params.id;
      
        House.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update departament with id = ${id}. Maybe departament was not found!`
              });
            } else res.send({ message: "udepartament was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating departament with id=" + id
            });
          });
      };

      //eliminar un docuemnto por id
      exports.delete = (req, res) => {
        const id = req.params.id;
      
        House.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete Tdepartament with id=${id}. Maybe departament was not found!`
              });
            } else {
              res.send({
                message: "departament was deleted successfully!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete departament with id=" + id
            });
          });
      };
