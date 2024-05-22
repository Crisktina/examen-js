const nomBuscar = document.getElementById("nomBuscar");
const tagBuscar = document.getElementById("tagBuscar");
const divErrorGrupos = document.getElementById("error");
const divErrorBusqueda = document.getElementById("error-busqueda");

function filterData(name = "", tag = "") {
  let matchesName = [];
  let matchesTag = [];
  const filteredData = allData.filter((group) => {
    if (name.length >= 3) {
      matchesName = group.nom.toLowerCase().includes(name.toLowerCase());
    }
    if (tag.length >= 3) {
      matchesName = group.tags.some((t) =>
        t.toLowerCase().includes(tag.toLowerCase())
      );
    }
    //console.log(matchesName);
    //console.log(matchesTag);

    return matchesName && matchesTag;
  });
  // mostrar error no coincidencia busqueda
  if (filteredData.length === 0) {
    divErrorGrupos.style.display = "block";
    divErrorGrupos.innerHTML = "No hay coincidencias.";
    divErrorGrupos.style.color = "red";
  } else {
    divErrorGrupos.style.display = "none";
  }

  printData(filteredData);
}

//Enviar busqueda
document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nomBuscar.value.trim().toLowerCase();
  const tag = tagBuscar.value.trim().toLowerCase();

  //mostrar error + de 3 letras en la busqueda
  if (name.length < 3 && tag.length < 3) {
    //console.log("Hay que poner + de 3 letras para buscar.");
    divErrorBusqueda.style.display = "block";
    divErrorBusqueda.innerHTML = "Hay que poner + de 3 letras para buscar.";
    divErrorBusqueda.style.color = "red";
  } else {
    divErrorBusqueda.style.display = "none";
  }
  filterData(name, tag);
});
