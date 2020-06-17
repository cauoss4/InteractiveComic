
drag = 0;
move = 0;
var ie = document.all;
var nn6 = document.getElementById && !document.all;
var isdrag = false;
var y,x;
var oDragObj;
var pic_width,pic_height,pic_zoom;
var divleft,divtop;

function change() {
	
	var file = document.getElementById("f");
	var div;
	var pic = document.querySelector("#preview")
	var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();


     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
         alert("only png jpg jpeg"); 
		 return;
     }
	 var isIE = navigator.userAgent.match(/MSIE/)!= null,
		 isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

	 if(isIE) {
		file.select();
		var reallocalpath = document.selection.createRange().text;


         if (isIE6) {
			pic.src = reallocalpath;
		 }else {
			
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
            
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		 }
	 }else {
		html5Reader(file);
	 }
}

 function html5Reader(obj){
	 
	 var filelist = obj.files;

	 for(var i=0;i<filelist.length;i++){
	 var reader = new FileReader();
	 reader.readAsDataURL(filelist[i]);
     
     reader.onload = function(e){
		document.querySelector("#form0").innerHTML+=`
		<p style='height: 0; left: 0px; position: absolute; top: 0px; width: 0;' class="dragAble" >
			<img src=${ this.result}   id="preview" alt="" name="pic"  onmousewheel="return bbimg(this)"     ondblclick="realsize();"
				style="top:0px;left:0px;position:relative;" 
				>
		</p>
		`

     }
 }
 }
 

function moveMouse(e) {
    if (isdrag) {
        oDragObj.style.top = (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y) + "px";
        oDragObj.style.left = (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x) + "px";
        return false;
    }
}

function initDrag(e) {
    var oDragHandle = nn6 ? e.target : event.srcElement;
    var topElement = "HTML";
    while (oDragHandle.tagName != topElement && oDragHandle.className != "dragAble") {
        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
    }
    if (oDragHandle.className == "dragAble") {
        isdrag = true;
        oDragObj = oDragHandle;
        nTY = parseInt(oDragObj.style.top + 0);
        y = nn6 ? e.clientY : event.clientY;
        nTX = parseInt(oDragObj.style.left + 0);
        x = nn6 ? e.clientX : event.clientX;
        document.onmousemove = moveMouse;
        return false;
    }
}
document.onmousedown = initDrag;
document.onmouseup = new Function("isdrag=false");

   
function wheel(event) {
	   if (!event) /**//* For IE. */
	   {
		   event = window.event;
	   }
	   else if (event.detail)
	   {
		   var height1 = $("#p_w_picpaths1").attr("height");
		   
		   if (!height1) {
			   height1 = height1.substring(0, height1.length - 2);
			   
		   }
		   var width1 = $("#p_w_picpaths1").attr("width");
		   
		   if (!width1) {
			   width1 = width1.substring(0, width1.length - 2);
		   
		   }
		   if (event.detail < 0) {
			   var temp1 = parseInt(height1) * 1.2;
			   var temp2 = parseInt(width1) * 1.2;
			   

		   } else {
			   var temp1 = parseInt(height1) / 1.2;
			   var temp2 = parseInt(width1) / 1.2;
		   }
		   
		   $("#p_w_picpaths1").attr("height", temp1 + "px");
		   
		   $("#p_w_picpaths1").attr("width", temp2 + "px");
	   }
   }
/*非Firefox的主流浏览器*/
function bbimg(o) {
	   var zoom = parseInt(o.style.zoom, 10) || 100;
	   zoom += event.wheelDelta / 12;
	   if (zoom > 0) o.style.zoom = zoom + '%';
	   return false;
   }	