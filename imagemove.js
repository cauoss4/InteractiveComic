var center_x = window.screen.width/2;
var center_y = window.screen.height/2;
var x = 0;
var y = 0;
var img = document.getElementById(`image`);
img.style.position = `absolute`;
function init()
{
  img = document.getElementById(`image`);
  img.style.position = `absolute`;
  var img_h = document.getElementById(`image`).height;
  var img_w = document.getElementById(`image`).width;
  alert(`current X: ${img_w} Y: ${img_h}`);
  img.style.left = (center_x - img_w/2) + `px`;
  img.style.top = (center_y - img_h/2) + `px`;
}
function moveClick()
{
  img = document.getElementById(`image`);
  img.style.position = `absolute`;
  img_x = parseInt(img.style.left.replace('px',''));
  img_y = parseInt(img.style.top.replace('px',''));;
  x = event.clientX - center_x;
  y = event.clientY - center_y;
  alert(`current X: ${img_x} Y: ${img_y}`);
  img.style.left = (img_x - x) + `px`;
  img.style.top = (img_y - y) + `px`;
}
