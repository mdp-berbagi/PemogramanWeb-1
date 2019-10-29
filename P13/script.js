var plane = document.getElementById('plane');

document.addEventListener('keydown', (event)=> {
  console.log(event.key);

  switch(event.key){
    case "a":
      plane.style.left = (plane.offsetLeft - 10) + 'px';
    break;
    case "d":
      plane.style.left = (plane.offsetLeft + 10) + 'px';
    break;
    case "w":
      plane.style.top = (plane.offsetTop - 10) + 'px';
    break;
    case "s":
      plane.style.top = (plane.offsetTop + 10) + 'px';
    break;
  }
});

document.addEventListener('mousedown',(event) => {
  var dot = document.createElement('div');

  dot.className = 'dot';
  dot.style.top = (event.pageY - 50) + "px";
  dot.style.left = (event.pageX - 50) + "px";

  document.body.appendChild(dot);
});


function moveLister() {
  console.log("Moving..");
}

document.addEventListener('mousedown', (evt) => {
  document.addEventListener('mousemove', moveLister);
});

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', moveLister);
})
