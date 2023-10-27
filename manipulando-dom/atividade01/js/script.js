const capturaH1 = document.getElementById("titulo");
capturaH1.innerText = 'Adicionando Titulo com JavaScript';

const capturaUl = document.querySelector("ul");
capturaUl.innerHTML = `
    <h3> Lista de Esportes Favoritos</h3>
    <li>Basquete</li>
    <li>Futebol</li>
    <li>Tenis</li>
`;

const capturaLink = document.querySelector("a");
capturaLink.innerText = 'Entrar no site da Proz';

const capturaOl = document.getElementById("lista-ordenada");
capturaOl.innerHTML = `
    <h3> Lista de Linguagens de Programação</h3>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">JavaScript</a></li>
    <li><a href="https://www.ruby-lang.org/pt/" target="_blank">Ruby</a></li>
    <li><a href="https://www.apple.com/br/swift/" target="_blank">Swift</a></li>
`;
