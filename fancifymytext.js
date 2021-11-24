window.onload = function (){
	
//Regular button code. 
const btn = document.getElementById("first_button");

btn.onclick = function() 
{
	document.getElementById("text_field").style.fontSize = "24pt";
}

//First Radio Button Code.
const rbtn_1 = document.getElementById("Fancy");

rbtn_1.onclick = function() 
{
	var text_field = document.getElementById("text_field");
	
	text_field.style.fontWeight = "bold";
	
	text_field.style.color = "blue";
	
	text_field.style.textDecoration = "underline";
}

//Second Radio Button Code.
const rbtn_2 = document.getElementById("Boring");

rbtn_2.onclick = function() 
{
	var text_field = document.getElementById("text_field");
	
	text_field.style.fontWeight = "normal";
	
	text_field.style.color = "black";
	
	text_field.style.textDecoration = "none";
}

//Moo button code. 
const btn_2 = document.getElementById("second_button");

btn_2.onclick = function() 
{	
	var text_field = document.getElementById("text_field");
	
	text_field.style.textTransform = "uppercase";
	
	var str = document.getElementById("text_field").value;
	
	var parts = str.split(".");
	
	str = parts.join("-Moo. ")
	
	document.getElementById("text_field").value = str;
}


}