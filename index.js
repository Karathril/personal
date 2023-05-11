var pagina = 1;

$("#enviar").click(function(){
    $.get("https://rickandmortyapi.com/api/character?page=1", function(data){
        $("#datos").empty();   
        $.each(data.results, function(i, dato) {
            var id_personaje = dato.id;
            $("#datos").append('<li class="list-group-item list-group-item-dark" >' 
            + dato.id + ': ' + dato.name + '<button id="'+ id_personaje +'" class="btn btn-primary">personaje</button> </li>');
            $("#"+id_personaje).click(function(){
                $.get("https://rickandmortyapi.com/api/character/"+id_personaje, function(data){
                    $("#datos").empty();    
                    $("#datos").append('<li class="list-group-item list-group-item-dark" ><div class=det_personaje>'+data.name+'<br><img src='+data.image+'></div></li>');
                });
            });
        });
    });
    $("#pagina_siguiente").click(function(){
        pagina++;
        $.get("https://rickandmortyapi.com/api/character?page=" + pagina, function(data){
            $("#datos").empty();    
            $.each(data.results, function(i, dato) {
                var id_personaje_ps = dato.id;
                $("#datos").append('<li class="list-group-item list-group-item-dark" >' 
                + dato.id + ': ' + dato.name + '<button id="'+ id_personaje_ps +'" class="btn btn-primary">personaje</button> </li>');
                $("#"+id_personaje_ps).click(function(){
                    $.get("https://rickandmortyapi.com/api/character/"+id_personaje_ps, function(data){
                        $("#datos").empty();    
                        $("#datos").append('<li class="list-group-item list-group-item-dark"><div class=det_personaje >'+data.name+'<br><img src='+data.image+'></div></li>');
                    });
                });
            });
        });     
    });
    $("#pagina_anterior").click(function(){
        if(pagina==1){
            pagina=1;
        }else{
            pagina--;
        }
        $.get("https://rickandmortyapi.com/api/character?page=" + pagina, function(data){
            $("#datos").empty();    
            $.each(data.results, function(i, dato) {
                var id_personaje_pa = dato.id;
                $("#datos").append('<li class="list-group-item list-group-item-dark" >' 
                + dato.id + ': ' + dato.name + '<button id="'+ id_personaje_pa +'" class="btn btn-primary">personaje</button> </li>');
                $("#"+id_personaje_pa).click(function(){
                    $.get("https://rickandmortyapi.com/api/character/"+id_personaje_pa, function(data){
                        $("#datos").empty();    
                        $("#datos").append('<li class="list-group-item list-group-item-dark"><div class=det_personaje >'+data.name+'<br><img src='+data.image+'></div></li>');
                    });
                });
            });
        });     
    });
});
    












