var center_x = window.screen.width/2;
var center_y = window.screen.height/2;
var x = 0;
var y = 0;
var img = document.getElementById(`image`);
img.style.position = `absolute`;

class picturePlace
{
  constructor(start_x, start_y,end_x,end_y)
  {
    this.start_x = start_x;
    this.start_y =start_y;
    this.end_x =end_x;
    this.end_y=end_y;
  }
  getStartX()
  {
    return this.start_x + x;
  }
  getStartY()
  {
    return this.start_y + y;
  }
  getEndX()
  {
    return this.end_x + x;
  }
  getEndY()
  {
    return this.end_y + y;
  }
  getCenterX()
  {
    var t = this.start_x + (this.end_x - this.start_x)/2;
    return t;
  }
  getCenterY()
  {
    var t = this.start_y + (this.end_y - this.start_y)/2;
    return t;
  }
}
var pic = new Array();
pic[0] = new picturePlace(100,100,200,200);
pic[1] = new picturePlace(-400,-400,-200,-200);
pic[2] = new picturePlace(-50,-50,50,50);
var currentPicture;
function init()
{
  x=0;
  y=0;
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
  xt = -(center_x - event.clientX);
  yt = -(center_y - event.clientY);
  alert(`clicked 좌표 X: ${xt} Y: ${yt}`);

  var b=false;
  var move;
  pic.forEach((item, i) => {
    if(xt>item.getStartX() && xt < item.getEndX() && yt > item.getStartY() && yt < item.getEndY())
    {
      b=true;
      move = item;
      return false;
    }
  });

  if(b)
  {
    //when input whole file of tree should check chidnode and their Point
    //here's just check x,y point of 1 element(TEST)
    if(currentPicture == move)
    {
      alert("same Picture");
    }
    else
    {
      xt = move.getCenterX() + x;
      yt = move.getCenterY() + y;
      x-=xt;
      y-=yt;
      alert(`이미지 좌표 X: ${x} Y: ${y}`);
      img.style.left = (img_x - xt) + `px`;
      img.style.top = (img_y - yt) + `px`;
      currentPicture = move;
    }
  }
}
