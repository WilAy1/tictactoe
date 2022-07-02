asp = ["1", "2" , "3", "4", "5", "6", "7", "8", "9"]
wtp = ["X"]

var scx = document.getElementsByClassName("sc_x")[0];

var sco = document.getElementsByClassName("sc_o")[0];

var lx = document.getElementsByClassName("x_score")[0];

var ox = document.getElementsByClassName("o_score")[0];

var rg = document.getElementsByClassName("rg")[0];

var gb = document.getElementsByClassName("gamebody")[0];
var oex = gb.innerHTML
var eo = document.getElementsByClassName("tande")[0];
var b = document.getElementsByClassName('b');
for(i = 0; i  < b.length; i++){
b[i].onclick = function(){
if((this.innerHTML == "")){
	if(wtp[0] == "X"){
	asp[this.id] = "X"
		this.innerHTML = "X"
		wtp[0] = "O"
		this.classList.add("x")
		eo.innerHTML = "O turn"
		lx.classList.remove("eact")
		ox.classList.add("eact")
	}
	else {
	asp[this.id] = "O"
		this.innerHTML = "O"
		wtp[0] = "X"
		this.classList.add("o")
		eo.innerHTML = "X turn"
		ox.classList.remove("eact")
		lx.classList.add("eact")
	}
	
}
else {
	eo.innerHTML = "Play elsewhere"
}



if((asp[0] == asp[1] && asp[0] == asp[2]) || (asp[0] == asp[3] && asp[0] == asp[6]) || (asp[0] == asp[4] && asp[0] == asp[8]) || (asp[2] == asp[4] && asp[2] == asp[6]) || (asp[1] == asp[4] && asp[1]== asp[7]) || (asp[2] == asp[5] && asp[2] == asp[8]) || (asp[3] == asp[4] && asp[3] == asp[5]) || (asp[6] == asp[7] && asp[6] == asp[8])){
   if(wtp[0] == "X"){
	eo.innerHTML = "O won"
	if(sco.innerHTML == "-"){
		sco.innerHTML = "1"
	}
	else {
		sco.innerHTML = parseInt(sco.innerHTML) + 1
	}
	gb.innerHTML = "<div class='ghb'><div class='ow'>O</div><div class='win'>Winner!</div></div>"
	ox.classList.add("eact")
	lx.classList.remove("eact")
}
	else {
	 eo.innerHTML = "X won"
		if(scx.innerHTML == "-"){
		scx.innerHTML = "1"
	}
	else {
		scx.innerHTML = parseInt(scx.innerHTML) + 1
	}
	gb.innerHTML = "<div class='ghb'><div class='xw'>X</div><div class='win'>Winner!</div></div>"
	ox.classList.remove("eact")
		lx.classList.add("eact")
	}
}

}
}
rg.onclick = function(){

eo.innerHTML = "Start Game"
ox.classList.remove("eact")
		lx.classList.add("eact")
gb.innerHTML = '<div class="eax"><div class="row eel"><div class="b" id="0"></div><div class="b" id="1"></div><div class="b l" id="2"></div></div><div class="row eel mex"><div class="b" id="3"></div><div class="b" id="4"></div><div class="b l" id="5"></div></div><div class="row eoa eel"><div class="b" id="6"></div><div class="b" id="7"></div><div class="b l" id="8"></div></div></div>'
	for(var i = 0; i < b.length; i++){
		b[i].innerHTML = ""
	}
	for(var i = 0; i < 9; i++){
		asp[i] = i
	}
	                                                  for(var i =0; i < document.scripts.length; i++){
                                                    if(document.scripts[i].src.includes('script.js')){
                                                      var oxe = document.createElement('script');
                                                      oxe.src = 'script.js';
                                                      document.scripts[i].replaceWith(oxe);
//eo.innerHTML = scripts[i].src
                                                    }
                                                  }


	}
	
ox.onclick = function(){
	lx.classList.remove("eact")
	ox.classList.add("eact")
	wtp[0] = "O"
	
	for(var i = 0; i < b.length; i++){
		b[i].innerHTML = ""
	}
	for(var i = 0; i < 9; i++){
		asp[i] = i
	}

wtp[0] = "O"
}
lx.onclick = function(){
	ox.classList.remove("eact")
	lx.classList.add("eact")
	
	for(var i = 0; i < b.length; i++){
		b[i].innerHTML = ""
	}
	for(var i = 0; i < 9; i++){
		asp[i] = i
	}
	                                                  

wtp[0] = "X"
}