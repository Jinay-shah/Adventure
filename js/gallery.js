/*Name this external file gallery.js*/

function upDate(previewPic){
 var ima=document.getElementById("image");
 ima.innerHTML=previewPic.alt;
 ima.style.background="url("+previewPic.src+")#8e68ff";
  
	}

function unDo(){
    var ima=document.getElementById("image");
    ima.style.background='#8e68ff';
    ima.innerHTML="Hover over an image below to display here.";
		
	}