function generadorPassword() {
    alert("Bienvenido al generador de contraseña");
    alert("Vamos a establecer tu nueva contraseña");
    alert("expertos aseguran que una longitud entre 12 a 18 caracteres es lo ideal");


    let nuevaContraseña = true
    let contadorCiclos = 0
    while (nuevaContraseña == true) {

        let nombre
        if (contadorCiclos === 0) {
            nombre = prompt("Ingresa tu nombre (la primera letra debe estar en mayuscula");
        } else {
            nombre = prompt("Ingresa tu nombre de nuevo (la primera letra debe estar en mayuscula");

        }

        let fecha = prompt("Ingresa tu fecha de nacimiento ")
        let caracterEspecial = prompt("Ingresa un caracter especial (,| . | $ | ; por ejemplo)")
        let nFavorito = prompt("ingresa tu numero favorito")


        passwordNueva=fecha+nombre+caracterEspecial+nFavorito

        console.log(passwordNueva)

        alert("Tu nueva contraseña es" + passwordNueva)
        
        let respuesta = prompt("¿Quieres crear otra contraseña? (si/no)").toLocaleUpperCase();
        if (respuesta !== 'si') {
            nuevaContraseña =false;
        }
        contadorCiclos- contadorCiclos + 1
    }

    alert("Gracias por utilizar el generador de contraseñas")
}

generadorPassword();