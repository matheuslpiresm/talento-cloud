const titulo = document.createElement("h1");
titulo.innerText = "Proz Carros";
titulo.id = "titulo";

const capturaConteudo = document.querySelector("body");
capturaConteudo.appendChild(titulo);

const criaMain = document.createElement("main");
capturaConteudo.appendChild(criaMain);

const nomes = ["HONDA HR-V ", "HYUNDAI CRETA", "VOLKSWAGEN T-CROSS", "CHEVROLET TRACKER"];
const descricoes = ["1.8 16V FLEX LX 4P AUTOMÁTICO", "1.6 16V FLEX PULSE PLUS AUTOMÁTICO", "1.4 250 TSI TOTAL FLEX HIGHLINE AUTOMÁTICO", "1.2 TURBO FLEX PREMIER AUTOMÁTICO"];
const anos = ["2019", "2022", "2021", "2022"];
const precos = ["R$ 106.870", "R$ 100.850", "R$ 116.900", "R$ 124.490"];
const cores = ["Branco", "Branco", "Prata", "Prata"];
const kms = ["78.000", "41500", "22.500", "40.000"];
const imagens = [
  "img/hrv.jpg",
  "img/creta.jpg",
  "img/tcross.jpg",
  "img/tracker.jpg"
];


for (let i = 0; i <= 3; i++) {
  const criaSection = document.createElement("section");
  criaSection.classList = "produtos";

  criaMain.appendChild(criaSection);
  
  criaSection.innerHTML = `
  <img src="${imagens[i]}" alt="Imagem do Produto ${i + 1}">
  <h2>${nomes[i]}</h2>
  <p><span>Descrição: </span>${descricoes[i]}</p>
  <p><span>Ano: </span>${anos[i]}</p>
  <p><span>Preço: </span>${precos[i]}</p>
  <p><span>Cor: </span>${cores[i]}</p>
  <p><span>Kilometragem: </span>${kms[i]}</p>
  
`;
}