//輪椅
        document.getElementsByTagName('input')[0].onchange=function(){
            if(document.getElementsByTagName('input')[0].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[2].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }  
                document.getElementById('tr85').removeAttribute('class');
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[2].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');    }                 
                }
                document.getElementById('tr85').setAttribute('class','dhide');
            }                        
        }
        //鞦韆
        document.getElementsByTagName('input')[1].onchange=function(){
            if(document.getElementsByTagName('input')[1].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[3].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[3].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');       }              
                }                
            }          
        }
        //翹翹板
        document.getElementsByTagName('input')[2].onchange=function(){
            if(document.getElementsByTagName('input')[2].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[4].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[4].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');           }          
                }                
            }          
        }
        //三維攀爬網
        document.getElementsByTagName('input')[3].onchange=function(){
            if(document.getElementsByTagName('input')[3].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[5].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[5].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');          }           
                }                
            }          
        }
        //旋轉木馬
        document.getElementsByTagName('input')[4].onchange=function(){
            if(document.getElementsByTagName('input')[4].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[6].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[6].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');           }          
                }                
            }          
        }
        //滾木
        document.getElementsByTagName('input')[5].onchange=function(){
            if(document.getElementsByTagName('input')[5].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[7].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[7].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');             }        
                }                
            }          
        }
        //軌道車
        document.getElementsByTagName('input')[6].onchange=function(){
            if(document.getElementsByTagName('input')[6].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[8].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[8].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');       }              
                }                
            }          
        }
        //滑桿
        document.getElementsByTagName('input')[7].onchange=function(){
            if(document.getElementsByTagName('input')[7].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[9].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[9].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');        }             
                }                
            }          
        }
        //平衡木
        document.getElementsByTagName('input')[8].onchange=function(){
            if(document.getElementsByTagName('input')[8].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[10].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[10].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');          }           
                }                
            }          
        }
        //彈簧搖動
        document.getElementsByTagName('input')[9].onchange=function(){
            if(document.getElementsByTagName('input')[9].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[11].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[11].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');           }          
                }                
            }          
        }
        //彈跳設備
        document.getElementsByTagName('input')[10].onchange=function(){
            if(document.getElementsByTagName('input')[10].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[12].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[12].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');           }          
                }                
            }          
        }
        //上肢運動設備
        document.getElementsByTagName('input')[11].onchange=function(){
            if(document.getElementsByTagName('input')[11].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[13].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[13].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');             }        
                }                
            }          
        }
        //梅花椿
        document.getElementsByTagName('input')[12].onchange=function(){
            if(document.getElementsByTagName('input')[12].checked==true){
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[14].textContent=='X'){
                         document.getElementById('tr'+i).setAttribute('class','dhide'); 
                    }
                }                 
            }else{
                for(var i=1;i<=84;i++){
                    if(document.getElementById('tr'+i).getElementsByTagName('td')[14].textContent=='X'){
                    document.getElementById('tr'+i).removeAttribute('class');              }       
                }                
            }          
        }
