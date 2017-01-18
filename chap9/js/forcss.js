function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
function styleHeaderSibling(tag,theclass){
	var headers = document.getElementsByTagName(tag);
	for (var i=0; i<headers.length; i++){
		var elem = getNextElement(headers[i].nextSibling);
		//elem.style.fontWeight = "bold";
		//elem.style.fontSize = "1.8em";
		//elem.style.color = "red";
		//elem.setAttribute("class","intro");
		addClass(elem,theclass);
	}
}

function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		var newClassName = element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className = newClassName;
	}
}
addLoadEvent(function(){styleHeaderSibling("h1","intro");});