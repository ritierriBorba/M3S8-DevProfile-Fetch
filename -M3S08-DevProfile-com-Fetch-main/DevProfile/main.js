import './style.css'



async function buscaNome() {
  try{
    const response = await fetch("https://api.github.com/users/menescal");
    const body = await response.json();
    console.log(body);
    document.querySelector("#nome").innerText = body.name;
    document.querySelector("#local").innerText = body.location;
    document.querySelector("#formacao").innerText = body.company;
    document.querySelector("#site").innerText = body.blog;
    document.querySelector("#criado").innerText = body.created_at;
    document.querySelector("#atual").innerText = body.updated_at;
    
    const nome = body.name;
  }catch{
    console.log("Erro gigante aconteceu!")
  }finally{
    console.log("OK");
  }
}


buscaNome();

