    //下拉選單
        $('#sl').click(function(){          
            switch($('#sl').val()){
                case '1':                    
                    window.location.href='index.html';
                    break;
                case '2':                   
                    window.location.href='index2.html';
                    break;
                case '3':                   
                    window.location.href='index3.html';
                    break;
                case '4':
                    window.location.href='index4.html';
                    break;
            }
        })           
        
        //輪椅
        $('#myTb input')[0].addEventListener('click',function(){
            $('input:eq(0)').attr('disabled',true);
            if($('input')[1].checked==true || $('input')[2].checked==true || $('input')[3].checked==true || $('input')[4].checked==true || $('input')[5].checked==true || $('input')[6].checked==true || $('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[0].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(2)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //鞦韆
        $('#myTb input')[1].addEventListener('click',function(){
            $('input:eq(1)').attr('disabled',true);
            if($('input')[2].checked==true || $('input')[3].checked==true || $('input')[4].checked==true || $('input')[5].checked==true || $('input')[6].checked==true || $('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[1].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(3)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //翹翹板
        $('#myTb input')[2].addEventListener('click',function(){
            $('input:eq(2)').attr('disabled',true);
            if($('input')[3].checked==true || $('input')[4].checked==true || $('input')[5].checked==true || $('input')[6].checked==true || $('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[2].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(4)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //三維攀爬網
        $('#myTb input')[3].addEventListener('click',function(){
            $('input:eq(3)').attr('disabled',true);
            if($('input')[4].checked==true || $('input')[5].checked==true || $('input')[6].checked==true || $('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[3].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(5)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //旋轉木馬
        $('#myTb input')[4].addEventListener('click',function(){
            $('input:eq(4)').attr('disabled',true);
            if($('input')[5].checked==true || $('input')[6].checked==true || $('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[4].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(6)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //滾木
        $('#myTb input')[5].addEventListener('click',function(){
            $('input:eq(5)').attr('disabled',true);
            if($('input')[6].checked==true || $('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[5].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(7)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //軌道車
        $('#myTb input')[6].addEventListener('click',function(){
            $('input:eq(6)').attr('disabled',true);
            if($('input')[7].checked==true || $('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[6].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(8)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        } 
                }
            }
        })
        //滑桿
        $('#myTb input')[7].addEventListener('click',function(){
            $('input:eq(7)').attr('disabled',true);
            if($('input')[8].checked==true || $('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[7].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(9)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }
                }
            }
        })
        //平衡木
        $('#myTb input')[8].addEventListener('click',function(){
            $('input:eq(8)').attr('disabled',true);
            if($('input')[9].checked==true || $('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[8].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(10)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }
                }
            }
        })
        //彈簧搖動
        $('#myTb input')[9].addEventListener('click',function(){
            $('input:eq(9)').attr('disabled',true);
            if($('input')[10].checked==true || $('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[9].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(11)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }
                }
            }
        })
        //彈跳設備
        $('#myTb input')[10].addEventListener('click',function(){
            $('input:eq(10)').attr('disabled',true);
            if($('input')[11].checked==true || $('input')[12].checked==true){

            }else{
                if($('input')[10].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(12)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }
                }
            }
        })
        //上肢運動設備
        $('#myTb input')[11].addEventListener('click',function(){
            $('input:eq(11)').attr('disabled',true);
            if($('input')[12].checked==true){

            }else{
                if($('input')[11].checked==true){                
                        for(var i=1;i<=28;i++){                    
                            $('#tr'+i).addClass('dhide');
                            if($('#tr'+i+' td:eq(13)').html()=="X"){
                                $('#tr'+i).removeClass('dhide');
                            }
                        }                

                }
            }
        })
        //梅花椿
        $('#myTb input')[12].addEventListener('click',function(){
            $('input:eq(12)').attr('disabled',true);
            if($('input')[12].checked==true){                
                    for(var i=1;i<=28;i++){                    
                        $('#tr'+i).addClass('dhide');
                        if($('#tr'+i+' td:eq(14)').html()=="X"){
                            $('#tr'+i).removeClass('dhide');
                        }
                    }                
                
            }
        })
