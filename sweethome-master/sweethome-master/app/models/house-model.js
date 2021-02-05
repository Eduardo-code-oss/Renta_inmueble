
module.exports = mongoose => {
var schema = 
        mongoose.Schema(
            {
                
                
                tipoDep : String,
                link : String,
                foto : String,
                telDep : Number,
                arrendatario : String,
                reqDep : Array,
                dirDep: String,
                costDep: Number,
                deposDep : Boolean,
                costDepos : Number,
                manteDep : Boolean,
                costMante : Number,
                obsMante : String,
                cita : Date,
                estructura : Array,
                amueblado : Boolean,
                estacionamiento: Boolean,
                noEsta : Number,
                obsGral : String,
                statusDep : String,
                idUser : String

            }
        );

const House = mongoose.model("houseRegister", schema);

return House;
};

