const Usuario = require("../models/usuario");
const Role = require('../models/role')

const EmailExists = async (correo) => {
  //Verificar si el correo existe
  const existeEmailDeUsuario = await Usuario.findOne({ correo });
  if (existeEmailDeUsuario) {
    throw new Error(`El correo ${correo}, ya esta registrado en la DB`);
  }
};

const esRoleValido = async (rol = '') => {
    //Verificar si el rol es valido y existe en la base de datos
    const existeRolDB = await Role.findOne({rol});
    if (!existeRolDB) {
        throw new Error(`El Rol ${rol}, no existe en la  DB`);
    }
    
}


module.exports = {
  EmailExists,
  esRoleValido
};
