
function ShowPicture(whichpic){
	var source = whichpic.getAttribute("href");
//	if(!source)return false;
	var place_holder = document.getElementById("Space_holder");
	if(!place_holder) return false;
	if(place_holder.nodeName != "IMG")return false;
	var text = whichpic.getAttribute("title");
	var discript = document.getElementById("discription");
	if(!discript) return false;
	//var body_element = document.getElementsByTagName("body")[0];
	place_holder.setAttribute("src",source);
	if (text){
		discript.firstChild.nodeValue = text;
	}else{
		discript.firstChild.nodeValue = "";
	}

	//discript.setAttribute("") 
	return true;
}
function CountChilds(){
	var body_element = document.getElementsByTagName("body")[0];
	var count_child = body_element.childNodes.length;
	alert(count_child);	
}
//window.onload = CountChilds;
function preparelinks(){
	/*var links = document.getElementsByTagName("a")
	for (var i=0; i<links.length; i++){
		//alert(links[i]);
		if(links[i].getAttribute("class") == "ShowPicture"){
			links[i].onclick = function(){
				//alert(typeof this);		
				ShowPicture(this);
				return false;
			}
		}
	}*/
	if (!document.getElementsByTagName||!document.getElementById) return false;
	var picture_lib = document.getElementById("ShowPic");
	if(!picture_lib)return false; //handle bad situation
	var lnks = picture_lib.getElementsByTagName("a");
	for (var i=0;i<lnks.length; i++){
		lnks[i].onclick = function(){
			//ShowPicture(this);
			return !ShowPicture(this);
		}
		//lnks[i].onkeypress = lnks[i].onclick;  //not enough safe, it's easy to be wake up
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(preparelinks);