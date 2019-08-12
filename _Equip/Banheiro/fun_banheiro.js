function AltRele_BAN1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Liga</a>";
    }
}

function AltRele_BAN2(){
    var estado2 = document.getElementById("estado2").innerHTML;
    if(estado2 === "0"){
        document.getElementById("estado2").innerHTML="1";
        document.getElementById("rele2").innerHTML="<div class='rele12_ligado'></div>";
		document.getElementById("botao2").innerHTML="<a href='/?desligar' class='botao2'>Desliga</a>";
    } else {
        document.getElementById("estado2").innerHTML="0";
        document.getElementById("rele2").innerHTML="<div class='rele2_desligado'></div>";
        document.getElementById("botao2").innerHTML="<a href='/?ligar' class='botao2'>Liga</a>";
    }
}

function AltRele_BAN3(){
    var estado3 = document.getElementById("estado3").innerHTML;
    if(estado3 === "0"){
        document.getElementById("estado3").innerHTML="1";
        document.getElementById("rele3").innerHTML="<div class='rele3_ligado'></div>";
		document.getElementById("botao3").innerHTML="<a href='/?desligar' class='botao3'>Desliga</a>";
    } else {
        document.getElementById("estado3").innerHTML="0";
        document.getElementById("rele3").innerHTML="<div class='rele3_desligado'></div>";
        document.getElementById("botao3").innerHTML="<a href='/?ligar' class='botao3'>Liga</a>";
    }
}