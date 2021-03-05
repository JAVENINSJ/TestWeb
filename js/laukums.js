/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var startTime;
var lastClick = -1;
var stage = 0;
var revealed;
var field = [];
var input;
var first = [   "Dollar" ,"Cent"    ,"Pound"   ,"Yen",
                "Franc"  ,"Euro"    ,"Drachma" ,"Sheqel",
                "Dong"   ,"Peso"    ,"Hryvnia" ,"Won",
                "Rupee"  ,"Kip"     ,"Austral" ,"Guarani",
                "Tugrik" ,"DePenny"];

var second = [  "&#36"    ,"&#162"   ,"&#163"   ,"&#165",
                "&#8355"  ,"&#128"   ,"&#8367"  ,"&#8362",
                "&#8363"  ,"&#8369"  ,"&#8372"  ,"&#8361",
                "&#x20B9" ,"&#8365"  ,"&#8371"  ,"&#8370",
                "&#8366"  ,"&#8368"];  
            


function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }
    
    return array;
    
}

function start(){
    
    startTime = new Date();
    
}

function end(){
    
    setTimeout(function(){
        alert("You managed to complete the game in "+(new Date() - startTime)/1000+" seconds!");
    },100);
    
}

function drawField(){
   
    if(document.getElementById("inputs").value>6 ||
       document.getElementById("inputs").value<1 ||
       document.getElementById("inputs").value%2 == 1)return;    
        
    if(document.getElementById("divs")!=null){
        document.getElementById("divs").remove();
    }    
    
    let z = document.createElement("div");
    z.setAttribute("id","divs");
    revealed = [];
    field = [];
    start();
    input = document.getElementById("inputs").value;

    for(let i = 0; i < input*input/2; i++){
        
        field.push(first[i]);
        field.push(second[i]);
        
    }  

    field=shuffle(field);
    
    for(let y=0; y<input; y++){     
        
        let row = document.createElement("div");
        
        for(let x=0; x<input; x++){
            
            let temp = document.createElement("button");
            temp.setAttribute("id",y*input+x);
            temp.setAttribute("class","butt");
            temp.innerHTML = "";
            
            temp.onclick=()=>{
                console.log("clicked");
                change(temp);
            };
            
            row.appendChild(temp);
            
        }
        
        z.appendChild(row);
        
    }
    
    document.getElementById("fields").appendChild(z);

}

function change(temp){
    
    console.log(stage);
    if(stage == -1 || temp.id == lastClick)return;
    
    console.log("changed");
    clickId = temp.id;
    
    if(revealed.indexOf(clickId) != -1)return;
    else{
        
        if(stage == 0){
            
            lastClick = clickId;
            stage = 1;
            temp.innerHTML = field[clickId];
            temp.style.color = "#FFFFFF";
            temp.style.background = "#1F4068"; 
            
        }else{
         
            if(first.indexOf(field[clickId]) == second.indexOf(field[lastClick])&&
               second.indexOf(field[clickId]) == first.indexOf(field[lastClick])){
                   
                revealed.push(clickId);
                revealed.push(lastClick);
                temp.innerHTML = field[clickId];
                temp.style.color = "#FFFFFF";
                temp.style.background = "#1F4068";
                stage = -1;
                setTimeout(function(){
                    
                    temp.style.background = "#a7c5eb";
                    temp.style.color = "#000000";
                    document.getElementById(lastClick).style.background = "#a7c5eb";
                    document.getElementById(lastClick).style.color = "#000000";
                    lastClick = -1;
                    stage = 0;
                    if(revealed.length >= input*input)end();
                    
                },1000);
                    
            }else{
                
                temp.style.background = "#e43f5a";
                temp.style.color = "#000000";
                document.getElementById(lastClick).style.background = "#e43f5a";
                document.getElementById(lastClick).style.color = "#000000";
                temp.innerHTML = field[clickId];   
                stage = -1;
                setTimeout(function(){
                    
                    temp.style.background = "";
                    temp.style.color = "";
                    temp.innerHTML = "";
                    document.getElementById(lastClick).style.background = "";
                    document.getElementById(lastClick).style.color = "";
                    document.getElementById(lastClick).innerHTML = "";
                    
                    lastClick = -1;
                    stage = 0;
                    
                },1500);
                    
            }
            
        }   
        
    }
}