const usuarios = [{
    user: "a",
    email: "a@algo.com",
    telefono: "123",
    password: "a"
}]
async function login(req, res){

}
async function register(req, res){
    console.log(req.body);
    const user = req.body.user;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    if(!user || !email || !phone || !password){
        res.status(400).send({status:"Error", message:"Campos incompletos"})
    }
    const revisarUsuario = usuarios.find(usuario => usuario.user == user);
    if(revisarUsuario){
        res.status(400).send({status:"Error", message:"Este usuario ya existe"})
    }
}

export const methods ={
    login,
    register
}