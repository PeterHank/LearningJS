function displayAbbreviations(){
	if(!document.getElementsByTagName("abbr")) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false; //check the browser support or not 
	
	var abbreviations = document.getElementsByTagName("abbr");
	//alert(abbreviations.length);
	defs = Object();
	var dictionary = document.createElement("dl");
	for (var i=0; i<abbreviations.length; i++){
		var current_abbr = abbreviations[i];
		if(current_abbr.childNodes.length < 1)continue;
		var definition = current_abbr.getAttribute("title");
		//alert(abbreviations[i].lastChild.nodeValue);
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;          //创建对象
		var dt_esc = document.createElement("dt");
		var dt_content = document.createTextNode(key);
		var dd_esc = document.createElement("dd");
		var dd_content = document.createTextNode(defs[key]); //创建列表中内容
		dt_esc.appendChild(dt_content);
		dd_esc.appendChild(dd_content);
		dictionary.appendChild(dt_esc);
		dictionary.appendChild(dd_esc);	//将列表中的内容绑定到dictionary中	
	}
	if (dictionary.childNodes.length < 1)return false;
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations"); //创建展示dictionary所用的标题
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dictionary);  //展示dictionary
}
addLoadEvent(displayAbbreviations);