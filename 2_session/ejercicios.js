// EJERCICIO 3
class InvertirCadena {
  constructor() {
    this.cadenaInvertir = '';
  }

  invertir() {
    if (this.cadenaInvertir === '') {
      throw new Error('La cadena es vacía');
    }

    const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
    console.log(cadenaInvertida);
  }
}
/* para evitar que se rompa, se puede usar 'try-catch' para manejar la excepción */


try {
  invertirCadena.invertir();
} catch (error) {
  console.log('Se produjo un error:', error.message);
}

const invertirCadena = new InvertirCadena('Esta es una prueba');
invertirCadena.invertir(); 


// EJERCICIO 4

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("¡Usuario logeado!");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}

const usuario = new Login("admin", "passwd");
usuario.login();

// Ejercicio 5

<>
  // Ejercicio 5
  <button class="custom-button" id="loginSuccess">Login</button><button class="custom-button button-cancel" id="loginFailure">Error</button></>



// Función que se ejecuta cuando se hace clic en el botón "loginFailure"
document.getElementById('loginFailure').addEventListener('click', function() {
  // Crear objeto login con parámetros incorrectos
  const login = new IniciarSesion('', '');

  try {
    // Llamar a la función para que falle
    login.iniciarSesion();
  } catch (error) {
    console.log('Se produjo un error:', error.message);
  }
});

class IniciarSesion {
  constructor(usuario, contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;
  }

  iniciarSesion() {
    if (this.usuario === '' || this.contraseña === '') {
      throw new Error('Credenciales incorrectas');
    }

    console.log('Inicio de sesión exitoso');
  }
}

