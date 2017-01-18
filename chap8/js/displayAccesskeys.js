function displayAccessKeys(){
	var links = document.getElementsByTagName("a");
	//var access_keys = Object();
	var title_element = document.createElement("h2");
	var title_txt = document.createTextNode("Accesskeys");
	var ul_element = document.createElement("ul");
	title_element.appendChild(title_txt);
	document.body.appendChild(title_element);
	for (var i=0; i<links.length; i++){
		if(!links[i].getAttribute("accesskey")) continue;
		//获取accesskey的编号
		var key_code = links[i].getAttribute("accesskey");
		//获取带有accesskey对应的文本
		var description = links[i].lastChild.nodeValue;
		//access_keys[key_code] = description;    //保存到对象中
		var li_element = document.createElement("li");
		var li_txt = document.createTextNode(key_code + ":" + description);
		li_element.appendChild(li_txt);
		ul_element.appendChild(li_element);		
	}
	document.body.appendChild(ul_element);
}
addLoadEvent(displayAccessKeys);