const rol = localStorage.getItem("rol");
const usuario = localStorage.getItem("usuario");
const titulo = document.getElementById("tituloRol");
const opciones = document.getElementById("opciones");

// Si no hay rol guardado, mostrar mensaje (sin redirigir)
if (!rol) {
  alert("No se detectó un rol activo. Inicie sesión para continuar.");
} else {
  titulo.textContent = `Bienvenido ${usuario} (${rol.toUpperCase()})`;
}

// Construcción dinámica del menú según el rol
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
  default:
    menu = ["Sin opciones disponibles"];
}

// Mostrar las opciones en el menú
menu.forEach(op => {
  const li = document.createElement("li");
  li.textContent = op;
  opciones.appendChild(li);
});

// Cierre de sesión sin redirección
document.getElementById("cerrarSesion").addEventListener("click", () => {
  localStorage.clear();
  alert("Sesión cerrada correctamente.");
  titulo.textContent = "Sesión finalizada";
  opciones.innerHTML = "";
});
