function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}
window.onload = function(){
	/*var testdiv = document.getElementById("testdiv");
	if(!testdiv) return false;
	//testdiv.innerHTML = "<p>This is <em>your</em> content.</p>"
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	para.appendChild(txt1);
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my ");
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	var txt3 = document.createTextNode("content");
	para.appendChild(txt3);
	testdiv.appendChild(para);*/
	
	var para2 = document.createElement("p");
	var text1 = document.createTextNode("This is ");
	var emphasis2 = document.createElement("em");
	var text2 = document.createTextNode("my ");
	var text3 = document.createTextNode("test.");
	emphasis2.appendChild(text2);
	para2.appendChild(text1);
	para2.appendChild(emphasis2);
	para2.appendChild(text3);
	var textDiv = document.getElementById("testdiv");
	textDiv.appendChild(para2);
	
	
}