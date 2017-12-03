document.getElementsByTagName("button")[0].addEventListener("click", function(){
	var text_non = document.getElementsByClassName("viz")[0];
	console.log(text_non)
	if (text_non.hidden == false){
   		text_non.hidden = true;
 	}else{
   		text_non.hidden = false;
 	}
});