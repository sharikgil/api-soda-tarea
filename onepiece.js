fetch("https://api.api-onepiece.com/v2/characters/en")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("personajes");

    const imagenes = {
  "Monkey D Luffy": "img/luffy.jpg",
  "Roronoa Zoro": "img/zoro.jpg",
  "Nami": "img/nami.jpg",
  "Sanji": "img/sanji.jpg", 
  "Usopp": "img/usopp.jpg",
  "Tony-Tony Chopper": "img/chopper.jpg",
  "Nico Robin": "img/robin.jpg",
  "Franky": "img/franky.jpg",
  "Brook": "img/brook.jpg",
  "Jinbe": "img/jinbe.jpg"
};

    data.slice(0, 10).forEach(p => {

      const img = imagenes[p.name] || "img/default.jpg";

      contenedor.innerHTML += `
      <div class="card">
      <img src="${img}" alt="${p.name}">
      <h3>🏴‍☠️ ${p.name}</h3>

      <p>⚔️ <strong>Rol:</strong> ${p.job || "Desconocido"}</p>
      <p>💰 <strong>Recompensa:</strong> ${p.bounty || "Desconocida"}</p>
   </div>
 `;
    });
  })
  .catch(error => console.error(error));
