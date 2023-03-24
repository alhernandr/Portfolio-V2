const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = './productos.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Nombre'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Developer: ' + jsonObj['Developer'] + ' // Ciclo: '+ jsonObj['Ciclo'];
    header.appendChild(myPara);
}
  
function showHeroes(jsonObj) {
    const Proyectos = jsonObj['Proyectos'];
  
    for (var i = 0; i < Proyectos.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara4 = document.createElement('img');

      myH2.textContent = Proyectos[i].Nombre_proyecto;
      myPara4.src = Proyectos[i].img;
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara4);
      section.appendChild(myArticle);
    }
}
  
request.responseType = 'json';

request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
  const superHeroesText = request.response; // cogemos la cadena de response
  const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

const myJSON = { "name": "Chris", "age": "38" };
myJSON
const myString = JSON.stringify(myJSON);
myString


