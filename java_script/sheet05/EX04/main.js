const loginUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        let undo = Math.random()*10
      setTimeout(
        () => (undo < 8 ? resolve(`${usuario} ${undo}`) : reject("Error al obtener perfil")),
        500
      );
    });
  };
let nombre="ana";
const doLogin= async (usuario) => {
    try{
        const arco = await loginUsuario(usuario);
        console.log(`bienbenida, ${arco}(admin)`);
        return arco;
    }catch(error){console.log(`algo salio mal: \n${error}`);}
}
doLogin(nombre);
console.log("codigo asincrono");

/*  loginUsuario(nombre).then((nombre) => {console.log(`1. bienbenido usuario ${nombre}`)}).catch((error) => {console.log(`algo salio mal:\n${error}`)})*/