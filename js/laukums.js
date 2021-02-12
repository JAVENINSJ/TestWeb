/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function drawField(){
    
    if(document.getElementById("divs")!=null){
        document.getElementById("divs").remove();
    }
    
    let index= 1;
    let input=document.getElementById("input").value;
    let x= document.createElement("div");
    x.setAttribute("id","divs");
    
    for(let y=0; y<input; y++){
        
        let div= document.createElement("div");
        
        for(let x=0; x<input; x++){
            
            let temp=document.createElement("button");
            temp.setAttribute("class","butt");
            temp.innerHTML=index;
            index++;
            
            temp.onclick=()=>{
                console.log(temp.innerHTML);
                temp.parentNode.parentNode.remove();
            };
            
            div.appendChild(temp);
            
        }
        
        x.appendChild(div);
        
    }
    
    document.getElementById("field").appendChild(x);

}

