function AltRele_COPA1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/monitor/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/monitor/?ligar' class='botao'>Liga</a>";
    }
}
