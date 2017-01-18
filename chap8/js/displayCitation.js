function displayCitation(){
	if(!document.getElementsByTagName("blockquote")) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有的引用
	cites = document.getElementsByTagName("blockquote");
	for(var i=0; i<cites.length; i++){
		if(!cites[i].getAttribute("cite")) continue;
		var url = cites[i].getAttribute("cite");
		//获取blockquote中的最后一个元素
		var cite_child = cites[i].getElementsByTagName("*");
		if(cite_child.length <1)continue;
		var elem = cite_child[cite_child.length-1];
		//创建新节点元素
		var superscript = document.createElement("sup");
		var link = document.createElement("a");
		var link_txt = document.createTextNode("source");
		link.setAttribute("href",url);
		link.appendChild(link_txt);
		superscript.appendChild(link);
		//节点元素追加到网页中
		elem.appendChild(superscript);
	}
	
}
addLoadEvent(displayCitation);