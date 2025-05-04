const loginUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => (Math.random()*10 < 5 ? resolve(usuario) : reject("Error al obtener perfil")),
        1000
      );
    });
  };
let nombre="user123"
  loginUsuario(nombre).then((nombre) => {console.log(`1. bienbenido usuario ${nombre}`)}).catch((error) => {console.log(`algo salio mal:\n${error}`)})