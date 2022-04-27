$(document).ready(function(){   
    //$("#loading").fadeIn("fast");    
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
      });

      /* $(document).ajaxStart(function() {
        $("#loading").show();
    });
    $(document).ajaxStop(function() {
        $("#loading").hide();
    }); */

    const endpoint = 'https://gnews.io/api/v4/top-headlines?token=44126fbe1a36dcd8e91a0fcced7c46a8&lang=en';
    
    
    fetch(endpoint) 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       //console.log(data);
       for(let i=0;i<10;i++){

           let titlenews=data.articles[i].title;
           let descriptionnews=data.articles[i].description;
           let publish = data.articles[i].publishedAt;
           let link=data.articles[i].url;
           let imagenews=data.articles[i].image;



           $('#allnews').append('<div class="row news">'
           +'<div class="col-lg-5 col-sm-12 col-xs-12 img-news">'
               +'<div><img class="image" src='+imagenews+'></div>'
           +'</div>'
           +'<div class="col-lg-7 col-sm-12 col-xs-12 text-news">'
               +'<div><h2><a target="_blank" style="color: black;" href='+link+'>'+titlenews+'</a></h2></div>'
               +'<div><p>'+publish+'</p></div>'
               +'<div><p class="descript">'+descriptionnews+'</p></div>'
           +'</div>'
        +'</div>');

           /* $('#allnews').append('<img  class="image" src='+imagenews+'>');
           $('#allnews').append('<h2><a class="title" target="_blank" style="color: black;" href='+link+ '>'+titlenews+'</a></h2>' );
           $('#allnews').append('<p>'+publish+'</p>');
           $('#allnews').append('<p class="descript">'+descriptionnews+'</p>'); */

       }          
    });
    $("#loading").fadeOut("slow");

    $('#search-icon').click(function(){
        $('#searchform').css('display','block');
    });
    $('.close').click(function(){
        $('#searchform').css('display','none');
    }); 


    //chức năng search
    $('#btnsearch').click(function(e){
        e.preventDefault();
        $("#loading").fadeIn("fast");
        let keysword=$('#keys').val();
        let lang=$('#language').val();
        console.log(keysword);        
        if(keysword!=''){
            $('#searchform').css('display','none');
            console.log($('#language').val());
        const search='https://gnews.io/api/v4/search?q='+keysword+'&token=44126fbe1a36dcd8e91a0fcced7c46a8&lang='+lang;
        //const search='https://gnews.io/api/v4/search?q='+keysword+'&token=0a879f02b9589f6774a41ac25af099e1&lang='+lang;
        console.log(search);      
        fetch(search)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if(data.articles.length>0){
                $('#allnews').empty();           
                for(let i=0;i<10;i++){
                    try {
                        let titlenews=data.articles[i].title;
                        let descriptionnews=data.articles[i].description;
                        let publish = data.articles[i].publishedAt;
                        let link=data.articles[i].url;
                        let imagenews=data.articles[i].image;
                        $('#allnews').append('<div class="row news">'
                        +'<div class="col-lg-5 col-sm-12 col-xs-12 img-news">'
                            +'<div><img class="image" src='+imagenews+'></div>'
                        +'</div>'
                        +'<div class="col-lg-7 col-sm-12 col-xs-12 text-news">'
                            +'<div><h2><a target="_blank" style="color: black;" href='+link+'>'+titlenews+'</a></h2></div>'
                            +'<div><p>'+publish+'</p></div>'
                            +'<div><p class="descript">'+descriptionnews+'</p></div>'
                        +'</div>'
                    +'</div>');     
                    } catch {
                        alert("No more news to display");
                        
                        break;
                    }
                }             
            }
            else
             alert("No more news to display");
            $("#loading").fadeOut("slow");        
        });
    }
    
    });  



    //chức năng về trang chủ
    $('#main-item').click(function(){
        const endpoint = 'https://gnews.io/api/v4/top-headlines?token=44126fbe1a36dcd8e91a0fcced7c46a8&lang=en';
    
        $("#loading").fadeIn("fast");
        $('#allnews').empty();
    fetch(endpoint) 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       for(let i=0;i<10;i++){

           let titlenews=data.articles[i].title;
           let descriptionnews=data.articles[i].description;
           let publish = data.articles[i].publishedAt;
           let link=data.articles[i].url;
           let imagenews=data.articles[i].image;


           $('#allnews').append('<div class="row news">'
           +'<div class="col-lg-5 col-sm-12 col-xs-12 img-news">'
               +'<div><img class="image" src='+imagenews+'></div>'
           +'</div>'
           +'<div class="col-lg-7 col-sm-12 col-xs-12 text-news">'
               +'<div><h2><a target="_blank" style="color: black;" href='+link+'>'+titlenews+'</a></h2></div>'
               +'<div><p>'+publish+'</p></div>'
               +'<div><p class="descript">'+descriptionnews+'</p></div>'
           +'</div>'
        +'</div>');

       }
       $("#loading").fadeOut("slow");          
    });    
    
    });
    
})