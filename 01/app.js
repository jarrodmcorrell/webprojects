var number = 1;

var elem1 = document.createElement("img");
var elem2 = document.createElement("img");
var elem3 = document.createElement("img");
var elem4 = document.createElement("img");
var elem5 = document.createElement("img");
var elem6 = document.createElement("img");
var elem7 = document.createElement("img");
var elem8 = document.createElement("img");
var elem9 = document.createElement("img");




function clickFunction(id){


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
            break;
        case 2:
            elem2.setAttribute("src", source);
            elem2.setAttribute("height", "200");
            elem2.setAttribute("width", "200");
            elem2.setAttribute("alt", source);  
            document.getElementById(number).appendChild(elem2);
            break;
        case 3:
            elem3.setAttribute("src", source);
            elem3.setAttribute("height", "200");
            elem3.setAttribute("width", "200");
            elem3.setAttribute("alt", source); ; 
            document.getElementById(number).appendChild(elem3);
            break;
        case 4:
            elem4.setAttribute("src", source);
            elem4.setAttribute("height", "200");
            elem4.setAttribute("width", "200");
            elem4.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem4);
            break;
        case 5:
            elem5.setAttribute("src", source);
            elem5.setAttribute("height", "200");
            elem5.setAttribute("width", "200");
            elem5.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem5);
            break;
        case 6:
            elem6.setAttribute("src", source);
            elem6.setAttribute("height", "200");
            elem6.setAttribute("width", "200");
            elem6.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem6);
            break;
        case 7:
            elem7.setAttribute("src", source);
            elem7.setAttribute("height", "200");
            elem7.setAttribute("width", "200");
            elem7.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem7);
            break;
        case 8:
            elem8.setAttribute("src", source);
            elem8.setAttribute("height", "200");
            elem8.setAttribute("width", "200");
            elem8.setAttribute("alt", source); 
            document.getElementById(number).appendChild(elem8);
            break;   
        default:
            console.log("Too Many Chords");
            break;
    }
    number++;

}