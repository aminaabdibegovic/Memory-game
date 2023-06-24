var biraliKartu=false;
let odabranaKarta=null;
var potez = 0 ;
var brojac=0;

const brojevi = [];
brojevi.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16") ;


(function shuffleArray(brojevi) {
  for (var i = brojevi.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); 
    var temp = brojevi[i];
    var element1 = document.getElementById(brojevi[i]);
    var element2 = document.getElementById(brojevi[j]);
    var src1 = element1.src;
    var src2 = element2.src;
    var name1=element1.name;
    var name2=element2.name

    element1.src = src2;
    element1.name= name2;
    element2.src = src1;
    element2.name = name1;

    brojevi[i] = brojevi[j];
    brojevi[j] = temp;
  }
}(brojevi));

function shuffleArray2(brojevi) {
  for (var i = brojevi.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); 
    var temp = brojevi[i];
    var element1 = document.getElementById(brojevi[i]);
    var element2 = document.getElementById(brojevi[j]);
    var src1 = element1.src;
    var src2 = element2.src;
    var name1=element1.name;
    var name2=element2.name

    element1.src = src2;
    element1.name= name2;
    element2.src = src1;
    element2.name = name1;

    brojevi[i] = brojevi[j];
    brojevi[j] = temp;
  }
};

//kod sa intereta za interval
function kreni(){
document.getElementById("start").disabled = true;
document.getElementById("start").style.backgroundColor ="gray";
var targetCount = 60 * 10; // 10 minuta
var count = 0;

var interval = setInterval(function() {
  count++;
  
  var minutes = Math.floor(count / 60);
  var seconds = count % 60;

  // dodavanje u html
  document.getElementById("count").innerHTML = minutes + ":" + seconds;

  // vracanje na pocetak
  if (count == targetCount || brojac==8) {
    clearInterval(interval);
    document.getElementById("kraj").style.display="block";
    document.getElementById("kraj").style.textAlign = "center";
    brojac=0;
  }
}, 1000);
}
 

function klik(image) {

  var backImage = image.parentNode.querySelector(".zadnja-strana");
  backImage.style.display = "block";
  var backImage2 = image.parentNode.querySelector(".prednja-strana");
  backImage2.style.display = "none";

 if(!biraliKartu){
    biraliKartu=true;
    odabranaKarta=backImage;
    odabranaKarta2=backImage2;
  }
  else if(biraliKartu){
    potez++;
    document.getElementById("count2").innerHTML = potez ;
    if(document.getElementsByName(backImage.name) == document.getElementsByName(odabranaKarta.name)){
      brojac++;
    }
    else{
      setTimeout(() => {
       odabranaKarta.style.display="none";
       odabranaKarta2.style.display="block";
       backImage.style.display="none";
       backImage2.style.display="block";
    }, 500) ;
    }
    biraliKartu=false;
  }
};

function kraj() {
    document.getElementById("count").innerHTML = 0 + ":" + 0 ;
    document.getElementById("count2").innerHTML=0;
    document.getElementById("kraj").style.display="none"; 
    document.querySelectorAll(".zadnja-strana").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".prednja-strana").forEach(a=>a.style.display = "block");
    potez=0;
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.backgroundColor ="black";
    shuffleArray2(brojevi);
}