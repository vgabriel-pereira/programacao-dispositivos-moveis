const url = "http://localhost:3000/tarefas";

//obter tarefas

await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(`Deu ruim!! ${error.message}`));

await fetch(url, {
  method: "POST",
  body: JSON.stringify({ nome: "Estudar react Native", concluida: false }),
})
  .then((response) => response.json())
  .catch((error) => console.log(`Deu ruim!! ${error.message}`));

await fetch(`${url}1a2b`, {
  method: "PUT",
  body: JSON.stringify({ nome: "Estudar react", concluida: true }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(`Deu ruim!! ${error.message}`));

await fetch(`${url}1a2b`, {
  method: "DELET",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(`Deu ruim!! ${error.message}`));
