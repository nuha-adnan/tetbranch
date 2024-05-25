 var n = 0 ;
 var arr = [];
 var score=0;
 var scorediv=document.getElementById("score");
 var option = document.getElementById("options");
var exam = document.getElementById("exam");
function  tabshow(x) {
 var startdiv = document.getElementById("start") ; // 1
 startdiv.style.display="none";
  var mathquestion =  [
                        {question:" x^2+x^2",Options:["2x^2","x^4","x^8","2x^4"],cur:0},
                        { question:"x^2*x^2",Options:["x^4","x^2","2x^2","4x"],cur:0}
  ];

  
  var itfr  =  [
    
    {
        question: "Was ist die richtige Methode, um ein neues HTML-Element zu erstellen?",
        Options: ["document.createElement('elementName')", "document.createElement()", "document.newElement('elementName')", "document.newElement()"]
    },
    {
        question: "Was ist ein Callback in JavaScript?",
        Options: ["Eine Funktion, die nach einer anderen Funktion aufgerufen wird", "Eine Funktion, die vor einer anderen Funktion aufgerufen wird", "Eine Funktion, die nur einmal aufgerufen wird", "Eine Funktion, die wiederholt aufgerufen wird"]
    },
    {
        question: "Was ist die Verwendung von `async` und `await` in JavaScript?",
        Options: ["Um Asynchronität zu handhaben", "Um Schleifen zu unterbrechen", "Um Variablen zu deklarieren", "Um Werte zu vergleichen"]
    },
    {
        question: "Was ist ein Closure in JavaScript?",
        Options: ["Eine Funktion, die auf Variablen aus ihrem äußeren Kontext zugreift", "Eine Funktion, die keine Argumente akzeptiert", "Eine Funktion, die Variablen lokalisiert", "Eine Funktion, die eine andere Funktion kapselt"]
    }
];
  var allgemein = [{
    question: "Was ist JavaScript?",
    Options: ["Eine Programmiersprache", "Ein HTML-Tag", "Ein CSS-Stil", "Ein Datenbankmanagementsystem"]
},
{
    question: "Was ist IT?",
    Options: ["Informationstechnologie", "Interaktive Technologie", "Internet-Technik", "Intelligente Technologie"]
},
{
    question: "Was denken Sie über CSS?",
    Options: ["Es ist eine Stylesheet-Sprache", "Es ist eine Programmiersprache", "Es ist eine Datenbanksprache", "Es ist ein Betriebssystem"]
}];
  var qustiondiv  = document.getElementById("quastion")
  if(x == "math") {
    arr=mathquestion;
    qustiondiv.innerHTML=arr[n].question;
    showoptions(arr[n].Options);
  }
  if(x == "allgemeinfragen") {
    arr=allgemein;
    qustiondiv.innerHTML=arr[n].question;
    showoptions(arr[n].Options);


  }
  if(x == "IT") {
    arr=itfr;
    qustiondiv.innerHTML=arr[n].question;
    showoptions(arr[n].Options);
  }

// var mthbt = document.getElementsByClassName("btn") ;  // 3 array
//  for (var i=0; i<mthbt.length;i++)
//  {

//     mthbt[i].style.display="none";
//  }

exam.style.display="flex";
 var tabs = document.getElementById("tabs");
  tabs.style.display="none";

 var qs= document.getElementById("qs") ;
 qs.style.display="block";
}

////   0-1-2         3
function nextfrage() {
if(n  ==arr.length -1) {
  option.style.display="none";
  document.getElementById("quastion").style.display="none";
  document.getElementById("frage").style.display="none";
  scorediv.innerHTML= "socre is " + score;
  n= 0;
  return;
}

  n=n+1;
  fortschritt();
  var qustiondiv  = document.getElementById("quastion")
  qustiondiv.innerHTML=arr[n].question;
  
  showoptions(arr[n].Options);
}

var buttonfarge=document.getElementById("frage");

buttonfarge.addEventListener("click", function() {
  nextfrage();

});

function showoptions(arrop){
  option.innerHTML="";
// for(var i=0;i<arrop.length;i++)
// {
//   var bttant = document.createElement("button");

//   bttant.innerHTML=arrop[i];
//   bttant.style.display="block";
//    option.appendChild(bttant);
//    bttant.addEventListener("click",()=>apscore(i));
   


// }
 arrop.forEach((opt,index)=>{
  var bttant = document.createElement("button");// button erstellen für optionnen 
  bttant.innerHTML=opt;
  bttant.style.display="block";
  option.appendChild(bttant);
  bttant.addEventListener("click",()=>apscore(index));// Antwort auswällen und score wird mehr 

  
 });

}
// [ "see" , "use", "see"]  arr[0]
 function apscore(x){
  
    if(x==arr[n].cur){
     score++;

    }
     
 
  

  

 }

 function fortschritt(){
  var fortschrittdiv = document.getElementById("fortschritt");
  let w = n * 100;
  fortschrittdiv.style.width= w + "px";
 }