function requisitar() {
  let url = "https://alunos.b7web.com.br/api/ping";
  let params = {
    method: "POST",
    body: JSON.stringify({
      nome: "Douglas",
      idade: 99
    })
  };
  fetch(url, params)
    .then(r => r.json())
    .then(json => {
      console.log(json);
    });
  console.log("alguma coisa");
}
async function requisitar2() {
  let url = "https://alunos.b7web.com.br/api/ping";
  const r = await fetch(url);
  const json = await r.json();
  console.log(json);
  console.log("alguma coisa");
}

requisitar2();
console.log("Texto QUalquer");
