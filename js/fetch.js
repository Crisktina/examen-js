// JSON
const url = "../data/amics.json";
let allData = [];

// Cerca sobre els grups a partir del nom o una etiqueta
// (tag), o més d’una etiqueta. Les cerques es podrien realitzar amb paraules
// parcials (a partir de 3 caràcters).

async function fetchData() {
  try {
    const response = await fetch(url);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    //console.log(data);
    allData = data;
    printData(allData);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

function printData(data) {
  // Seleccionar el div
  const cardContainer = document.getElementById("card-container");

  // Limpiar el div
  cardContainer.innerHTML = "";

  //En el caso de que la busqueda no haya coincidencias
  if (data.length === 0) {
    const noGroupsMessage = document.createElement("div");
    noGroupsMessage.innerHTML =
      '<div class="invalid-feedback">No hay grupos.</div>';
    cardContainer.appendChild(noGroupsMessage);
    return;
  }

  // Crear las cards con datos
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-md-6";

    card.innerHTML = `
      <div
        class="card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
    <div class="col p-4 d-flex flex-column position-static">
      <h3 class="mb-0">${item.nom}</h3>
      <p class="card-text mb-auto">${item.descripcio}</p>
    </div>
    <div class="col-auto d-none d-lg-block">
      <img
        src="${item.imatge}"
        alt="imagen"
        class="bd-placeholder-img"
        width="200"
        height="250"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
    </div>
    <div class="card-footer text-body-secondary">
      <p class="mb-2 fw-semibold">Tags:</p>
      <div class="d-inline-flex">
        ${item.tags
          .map(
            (tag) => `
          <blockquote class="blockquote mb-3 me-3">
            <footer class="blockquote-footer fs-6 fst-italic">
              ${tag}
            </footer>
          </blockquote>
        `
          )
          .join("")}
      </div>
    </div>
    </div>
  `;

    // Añadir al div
    cardContainer.appendChild(card);
  });
}

// Llamar a la función para hacer fetch de los datos
fetchData();
