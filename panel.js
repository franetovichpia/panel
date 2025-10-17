const rol = localStorage.getItem("rol");
const usuario = localStorage.getItem("usuario");
const titulo = document.getElementById("tituloRol");
const opciones = document.getElementById("opciones");

if (!rol) {
  window.location.href = "../pantalla1-login/login.html";
}

titulo.textContent = `Bienvenido ${usuario} (${rol.toUpperCase()})`;

let menu = [];

switch (rol) {
  case "abogado":
    menu = ["Gestionar clientes", "Ver causas", "Reportes", "Usuarios bloqueados"];
    break;
  case "asistente":
    menu = ["Ver calendario", "Subir documentos", "Ver tareas asignadas"];
    break;
  case "administrador":
    menu = ["Administrar usuarios", "Realizar backup", "Ver logs del sistema"];
    break;
}

menu.forEach(op => {
  const li = document.createElement("li");
  li.textContent = op;
  opciones.appendChild(li);
});

document.getElementById("cerrarSesion").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "../pantalla3-logout/logout.html";
});
