function mostrarDetalleProyecto(proyectoId) {
  var contenido = '';

  if (proyectoId === 'proyecto1') {
    contenido = '<h3>Proyecto 1</h3><p>Detalles del proyecto 1.</p><p>Fecha de inicio: Enero 2023</p>';
  } else if (proyectoId === 'proyecto2') {
    contenido = '<h3>Proyecto 2</h3><p>Detalles del proyecto 2.</p><p>Fecha de inicio: Marzo 2023</p>';
  }
  // Agregar más proyectos según sea necesario

  document.getElementById('detalle-proyecto-contenido').innerHTML = contenido;
  document.getElementById('detalle-proyecto').style.display = 'flex';
}

function cerrarDetalleProyecto() {
  document.getElementById('detalle-proyecto').style.display = 'none';
}
