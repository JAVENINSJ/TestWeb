/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global field */
var clickd;
var field = [];
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
            
var stage = true;
var index = 0;

function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }
    
    return array;
    
}

function drawField(){
        
    if(document.getElementById("divs")!=null){
        document.getElementById("divs").remove();
    }
    
    let input = document.getElementById("input").value;
    
    if(input>6||input<1||input*input%2==1)return;
    
    let z = document.createElement("div");
      
    
    while(index<input*input/2){
        
        field.push(new Array(first[index],0));
        field.push(new Array(second[index],0));
        index++;
        
    }
    
    index=0;
    field=shuffle(field);

    
    z.setAttribute("id","divs");
    
    for(let y=0; y<input; y++){        
        for(let x=0; x<input; x++){
            
            let temp = document.createElement("button");
            temp.setAttribute("class","butt");
            temp.setAttribute("id",index);
            temp.innerHTML=field[index][0];
            
            temp.onclick=()=>{
                console.log(temp.innerHTML);
                temp.parentNode.remove();
            };
            
            index++;
            
            z.appendChild(temp);
            
        }
        
        z.innerHTML+="<br>";
        
    }
    
    document.getElementById("fields").appendChild(z);

}

function pressed(temp){
    
    console.log(temp.id);
//    if(!Number.isInteger(temp.innerHTML))return;
//                
//                if(stage){   
//                                        
//                    clickd = temp.innerHTML-1;
//                    temp.innerHTML = fields[clickd][0];
//                    field[clickd][1] = 1;
//                    stage = false;
//                        
//                }else{
//                    
//                    temp.innerHTML = fields[temp.innerHTML-1][0];
//
//                    if( first.indexOf(fields[clickd][0]) == 
//                        second.indexOf(fields[temp.innerHTML-1][0]) 
//                        &&
//                        second.indexOf(fields[clickd][0]) == 
//                        first.indexOf(fields[temp.innerHTML-1][0]) ){
//
//                        fields[clickd][1] = 2;
//                        fields[temp.innerHTML-1][1] = 2;
//                        temp.innerHTML = fields[temp.innerHTML-1][0];
//
//                    }else{
//                        
//                        
//                        
//                    }
//
//                    stage=true;
//                    
//                }                
}

