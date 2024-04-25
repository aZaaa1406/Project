import mysql from 'mysql';

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'partiya',
    user:'root',
    password: 'password'
})
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("Base de datos cargada");
    }
})

const usuarios = [{
    user: "a",
    email: "a@algo.com",
    telefono: "123",
    password: "a"
}]
async function login(req, res){
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        return res.status(400).send({status: "Error", message:"Los campos estan incompletos"})
    }
    const usuarioAResvisar = usuarios.find(usuario => usuario.email === email);
    if(!usuarioAResvisar){
        return res.status(400).send({status:"Error", message:"Error en el login"})
    }
    const loginOk = usuarios.find(usuario => usuario.password === password);
    if(!loginOk){
        return res.status(400).send({status:"Error", message:"Error en el login"})
    }
    res.send({status:"ok",message:"Usuario loggeado",redirect:"/"});
}
async function register(req, res){
    console.log(req.body);
    const user = req.body.user;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    if(!user || !email || !phone || !password){
        return res.status(400).send({status:"Error", message:"Campos incompletos"})
    }
    const revisarUsuario = usuarios.find(usuario => usuario.user == user);
    if(revisarUsuario){
        return res.status(400).send({status:"Error", message:"Este usuario ya existe"})
    }
    const nuevoUser ={
        user, email, phone, password
    };
    usuarios.push(nuevoUser);
    console.log(usuarios);
    return res.status(201).send({status:"ok",message:'Usuario agregado',redirect:"/login"})
}

export const methods ={
    login,
    register
}