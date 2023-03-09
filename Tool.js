function validarMaterias(event) {
    event.preventDefault(); // evitar que se envíe el formulario

    let semestreSeleccionado = document.querySelector('option[name="semestre"]:checked').value;
    let materiasSeleccionadas = document.querySelectorAll('input[name="materia"]:checked');    
    // validar si las materias seleccionadas corresponden al semestre seleccionado

    for (let i = 0; i < materiasSeleccionadas.length; i++) { 
        let semestresPermitidos = materiasSeleccionadas[i].dataset.semestre.split(' ');
        alert(`Agregates esta materia ${materiasSeleccionadas[i].value}`);
        if (!semestresPermitidos.includes(semestreSeleccionado)) {
            alert(`La materia ${materiasSeleccionadas[i].value} no está disponible para el semestre seleccionado`);
            materiasSeleccionadas[i].checked = false;

        }
    }
}


function mostrarMaterias() {
    let Eleccion1 = document.gerySelector('input[name="materia"]:checked').value;
    let Eleccion2 = document.getElementById('input[name="materia"]:checked').value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Materias seleccionadas: " + Eleccion1  + " , "+ Eleccion2;
  }
