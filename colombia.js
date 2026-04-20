fetch("https://www.datos.gov.co/resource/2uxx-gxp3.json?$limit=20")
  .then(res => res.json())
  .then(data => {
    const tabla = document.getElementById("tabla");

    data.forEach(d => {
      tabla.innerHTML += `
        <tr>
          <td>${d.genero || "N/A"}</td>
          <td>${d.edad || "N/A"}</td>
          <td>${d.nombre_dx || "N/A"}</td>
          <td>${d.resultadoimc || "N/A"}</td>
          <td>${d.riesgo_cardiovascular || "N/A"}</td>
          <td>${d.ocupacion || "N/A"}</td>
        </tr>
      `;
    });
  })
  .catch(error => console.error(error));