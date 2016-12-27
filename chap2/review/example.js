var mood = "happy new 4' to 5\" and 6";
var age = 24;
//var beatles = [];
var beatles = Object();
var years = [1991,1992,1993];
var lennon = Object();  //gennerate an object
var message;
var Person = Object();

//beatles[0] = years;
//beatles[3] = 5;

//lennon.name = "Peter"; // add property for object
//lennon.age = "24";
//lennon.sex = "male";
lennon = {name:"Peter", age:24, sex:"male"}; //create object by {}
//beatles[0] = lennon;
beatles.singer = lennon; // change beatles as a object to read easy
//message = "time"+"\ "+"is very important"+"!";
message = "my age is "+age;
/*
if (age = false) //interesting, age = 20 or orther, the result will alaways get
{
	alert("right");
}*/
/*
var count = 1;
while(count < 11){
	alert("hello"+count);
	count++;
}*/
//Person.name = "Peter";
//Person.age = 24;

//Person.walk()
//var time = new Date();
//var Today = time.getMonth();
//alert(Today);

//alert(mood);
//alert(age);
//alert(beatles[3]);
//alert(years[2]);
//alert(beatles[0][1]);
//alert(lennon.sex);
//alert(message);
//alert(beatles.singer.name);
//alert("10"+20);
//alert(10+20);
//alert(typeof document);
//alert(typeof document.getElementById("purchses"));
//alert(document.getElementsByTagName("li").length);
/*var items = document.getElementsByTagName("li");
for (var i=0; i<items.length; i++){
	alert(typeof items[i]+i);
}*/
var shopping = document.getElementById("purchses");
var items = shopping.getElementsByTagName("*");
//var sales = document.getElementsByClassName("sale");
//alert(sales.length);
//alert(items.length);
for (var i=0; i<items.length; i++){
	//alert(typeof items[i]+i);
}
function GetElementsByClassName(node,className){
	if(node.getElementsByClassName){
		return node.getElementsByClassName(className);
	}
	else{
		var result = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i=0; i<elems.length; i++){
			if(elems[i].className.indexOf(className)!=-1)
			result[result.length] = elems[i];
		}
	}
	return result;
}
var sales = GetElementsByClassName(shopping,"sale");
//alert(sales.length);
var paras = document.getElementsByTagName("p");
for (var i=0; i<paras.length; i++){
	paras[i].setAttribute("title",i);
	title = paras[i].getAttribute("title");
	if(title){
		alert(title);
	}
	//alert(paras[i].getAttribute("title"));
}
function ShowPicture(whichpic){
	var source = whichpic.getAttribute("href");
	var place_holder = document.getAttribute("Space_holder");
	place_holder.setAttribute("src",source);
}




