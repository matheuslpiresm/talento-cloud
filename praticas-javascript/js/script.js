// Captura o elemento com id "titulo" e altera seu texto
const capturaH1 = document.getElementById("titulo");
capturaH1.innerText = 'Adicionando Titulo com JavaScript';


// Captura o primeiro elemento "ul" e redefine seu conteúdo HTML
const capturaUl = document.querySelector("ul");
capturaUl.innerHTML = `
    <h2> Lista de Esportes Favoritos</h2>
    <li>Basquete</li>
    <li>Futebol</li>
    <li>Tenis</li>
`;


// Captura o primeiro elemento "a" e redefine seu texto
const capturaLink = document.querySelector("a");
capturaLink.innerText = 'Entrar no site da Proz';


// Captura o elemento com id "lista-ordenada" e define seu conteúdo HTML
const capturaOl = document.getElementById("lista-ordenada");
capturaOl.innerHTML = `
    <h2> Lista de Linguagens de Programação</h2>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">JavaScript</a></li>
    <li><a href="https://www.ruby-lang.org/pt/" target="_blank">Ruby</a></li>
    <li><a href="https://www.apple.com/br/swift/" target="_blank">Swift</a></li>
`;


// Cria um novo elemento "li", define seu texto e id, e o adiciona a um elemento com classe "lista-linguagens"
const criaElemento = document.createElement("li");
criaElemento.innerText = "JavaScript";
criaElemento.id = "ling-js";
const capLista = document.querySelector(".lista-linguagens");
capLista.appendChild(criaElemento);


// Cria um novo elemento "div" com classe "post-bg", define seu conteúdo HTML e o adiciona a um elemento com classe "posts"
const criandoPost = document.createElement("div");
criandoPost.classList = "post-bg";
criandoPost.innerHTML = `
    <h2 class="post-titulo">Swift</h2>
    <p class="post-texto">
        Swift é uma linguagem de programação 
    </p>
`;
const capturaPostagem = document.querySelector(".posts");
capturaPostagem.appendChild(criandoPost);


// Seleciona o primeiro elemento "h2" e altera seu estilo (cor e tamanho)
const testandoStyle = document.querySelector("h2");
testandoStyle.style.color = "#8223db";
testandoStyle.style.fontSize = "25px";


// Seleciona o primeiro elemento "h5" e verifica se possui a classe "alinhamento", 
// mostra o resultado no console com true or false
const h5 = document.querySelector("h5");
const consultaClass = h5.classList.contains("alinhamento");
console.log('true or false?', consultaClass);


// Adiciona classe "nova-classe" ao elemento h5 e exibe
h5.classList.add("nova-classe");
console.log(h5);


// Remove classe "alinhamento" do elemento h5
h5.classList.remove("alinhamento")
console.log(h5);


// Utiliza método toggle para verificar se existe ou não a classe declarada 
h5.classList.toggle("alinhamento");


// Capturando h1 e button para manipulação de contagem
let numero = document.getElementById("numero");
let botao = document.querySelector(".btn");
let cont = 0;

function adicionaUm() {
    cont += 1;
    numero.innerText = cont;
}

botao.addEventListener('click', adicionaUm);











