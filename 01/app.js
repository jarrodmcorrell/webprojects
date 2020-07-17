var number = 1;

var elem1 = document.createElement("img");
var elem2 = document.createElement("img");
var elem3 = document.createElement("img");
var elem4 = document.createElement("img");
var elem5 = document.createElement("img");
var elem6 = document.createElement("img");
var elem7 = document.createElement("img");
var elem8 = document.createElement("img");


var btn1 = document.createElement("button");
btn1.innerHTML = "&#10060";
var btn2 = document.createElement("button");
btn2.innerHTML = "&#10060";
var btn3 = document.createElement("button");
btn3.innerHTML = "&#10060";
var btn4 = document.createElement("button");
btn4.innerHTML = "&#10060";
var btn5 = document.createElement("button");
btn5.innerHTML = "&#10060";
var btn6 = document.createElement("button");
btn6.innerHTML = "&#10060";
var btn7 = document.createElement("button");
btn7.innerHTML = "&#10060";
var btn8 = document.createElement("button");
btn8.innerHTML = "&#10060";



function clickFunction(id){

    console.log(number);
    console.log("You Clicked" + id.innerHTML);

    

    if(id.innerHTML.includes("/")){
        var source = "chords/" + id.innerHTML.replace("/", "_") + ".png";
    }else{
        var source = "chords/" + id.innerHTML + ".png";
    }

    switch (number) {
        case 1:
            elem1.setAttribute("src", source);
            elem1.setAttribute("height", "200");
            elem1.setAttribute("width", "200");
            elem1.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem1);
            document.getElementById(number).appendChild(btn1);
            
            btn1.addEventListener("click", 
            function(){
                document.getElementById("1").removeChild(elem1);
                document.getElementById("1").removeChild(btn1);
                number--;
            });

            break;
        case 2:
            elem2.setAttribute("src", source);
            elem2.setAttribute("height", "200");
            elem2.setAttribute("width", "200");
            elem2.setAttribute("alt", source);  
            document.getElementById(number).appendChild(elem2);
            document.getElementById(number).appendChild(btn2);

            btn2.addEventListener("click", 
            function(){
                document.getElementById("2").removeChild(elem2);
                document.getElementById("2").removeChild(btn2);
                number--;
            });

            break;
        case 3:
            elem3.setAttribute("src", source);
            elem3.setAttribute("height", "200");
            elem3.setAttribute("width", "200");
            elem3.setAttribute("alt", source); ; 
            document.getElementById(number).appendChild(elem3);
            document.getElementById(number).appendChild(btn3);
            btn3.addEventListener("click", 
            function(){
                document.getElementById("3").removeChild(elem3);
                document.getElementById("3").removeChild(btn3);
                number--;
            });

            break;
        case 4:
            elem4.setAttribute("src", source);
            elem4.setAttribute("height", "200");
            elem4.setAttribute("width", "200");
            elem4.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem4);
            document.getElementById(number).appendChild(btn4);
            btn4.addEventListener("click", 
            function(){
                document.getElementById("4").removeChild(elem4);
                document.getElementById("4").removeChild(btn4);
                number--;
            });

            break;
        case 5:
            elem5.setAttribute("src", source);
            elem5.setAttribute("height", "200");
            elem5.setAttribute("width", "200");
            elem5.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem5);
            document.getElementById(number).appendChild(btn5);
            btn5.addEventListener("click", 
            function(){
                document.getElementById("5").removeChild(elem5);
                document.getElementById("5").removeChild(btn5);
                number--;
            });

            break;
        case 6:
            elem6.setAttribute("src", source);
            elem6.setAttribute("height", "200");
            elem6.setAttribute("width", "200");
            elem6.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem6);
            document.getElementById(number).appendChild(btn6);
            btn6.addEventListener("click", 
            function(){
                document.getElementById("6").removeChild(elem6);
                document.getElementById("6").removeChild(btn6);
                number--;
            });

            break;
        case 7:
            elem7.setAttribute("src", source);
            elem7.setAttribute("height", "200");
            elem7.setAttribute("width", "200");
            elem7.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem7);
            document.getElementById(number).appendChild(btn7);
            btn7.addEventListener("click", 
            function(){
                document.getElementById("7").removeChild(elem7);
                document.getElementById("7").removeChild(btn7);
                number--;
            });

            break;
        case 8:
            elem8.setAttribute("src", source);
            elem8.setAttribute("height", "200");
            elem8.setAttribute("width", "200");
            elem8.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem8);
            document.getElementById(number).appendChild(btn8);
            btn8.addEventListener("click", 
            function(){
                document.getElementById("8").removeChild(elem8);
                document.getElementById("8").removeChild(btn8);
                number--;
            });

            break;   

            
        default:
            console.log("Too Many Chords");
            break;

        
    }
    if(number > 8){
        
    }else{
        number++;
    }
}

function randomMajorProgression(){
    
}

function randomMinorProgression(){
    
}