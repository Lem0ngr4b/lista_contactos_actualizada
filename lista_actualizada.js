let listaContactos = [];

//Funcion para agregar un contacto
function agregarContacto(nombre, correo, telefono) {
  let contacto = { nombre, telefono, correo };
  listaContactos.push(contacto);
}

//Funcion para eliminar contactos
function eliminarContacto(nombre) {
  listaContactos = listaContactos.filter(
    (contacto) => contacto.nombre !== nombre
  );
}

//funcion para actualizar contactos
function actualizarContacto(nombre, nuevoTelefono, nuevoCorreo) {
  listaContactos.forEach((contacto) => {
    if (contacto.nombre === nombre) {
      contacto.telefono = nuevoTelefono;
      contacto.correo = nuevoCorreo;
    }
  });
}

//pruebas

agregarContacto("juan", "#####@gmail.com", "32324234423");
agregarContacto("sofia", "######x@gmail.com", "345267372");

eliminarContacto("juan");

actualizarContacto("sofia", "ejemploxd@gmail.com", "35628735287");

console.log(listaContactos);
