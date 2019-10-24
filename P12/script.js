// DOM : pilih objek dengan nama
console.log(
  document.getElementsByName('nama')[0].value,
  document.getElementsByName('nama')
);

// DOM : pilih objek dengan tag
console.log(
  document.getElementsByTagName('input')[0].value
);

// create Element
var header = document.createElement('h1');
document.getElementById('app').appendChild(header);

var header2 = document.createElement('h2');
document.getElementById('app').appendChild(header2);

var berita = document.createElement('div');
document.getElementById('app').appendChild(berita);

header.textContent = 'Breaking News';
header2.textContent = 'Palembang dilanda <br /> asap';
berita.innerHTML = 'Indo<br /> nesia';

var foto = document.createElement('img');
document.getElementById('app').appendChild(foto);

// set attribut
foto.setAttribute('src', './asap.png');
foto.setAttribute('width', '100px');


// test
var container = document.createElement('div');
var title = document.createElement('h2');
var foto2 = document.createElement('img');
var judulFoto = ["foto pertama", "kedua", "dan ketiga"];

document.getElementById('app').appendChild(container);
container.appendChild(title);
container.appendChild(foto2);

container.style = "width: 400px;";
title.setAttribute('class','kuning');
foto2.setAttribute('width', '200px');

var min = 0;
var max = 3;
var now = min;

setInterval(() => {
  ++now;
  title.textContent = judulFoto[now - 1];
  foto2.setAttribute('src', './' + now + '.png');
  now = (now >= max) ? min : now;
}, 1000);
