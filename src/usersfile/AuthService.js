export const registerUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '{"users": []}');
      if (users.users.find(user => user.username === username || user.email === email)) {
        reject(new Error("El usuario ya existe."));
      } else {
        users.users.push({ username, email, password }); // En producción, asegúrate de hashear la contraseña
        localStorage.setItem('users', JSON.stringify(users));
        resolve(true);
      }
    });
  }
  
  // Verifica las credenciales del usuario para el login y simula una operación asincrónica
  export const  loginUser = (username, password) => {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '{"users": []}');
      if (users.users.some(user => user.username === username && user.password === password)) {
        localStorage.setItem('actualUser', JSON.stringify({ username,password }));
        resolve(true);
    } else {
        reject(new Error("Credenciales incorrectas"));
      }
    });
  }

  export const  logoOut = () => {
    return new Promise((resolve, reject) => {
        localStorage.setItem('actualUser', JSON.stringify({}));
    });
  }