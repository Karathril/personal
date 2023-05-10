var pagina = 1;

$("#enviar").click(function(){
    $.get("https://rickandmortyapi.com/api/character?page=1", function(data){
        $("#datos").empty();   
        $.each(data.results, function(i, dato) {
        $("#datos").append('<li class="list-group-item list-group-item-dark" >' + dato.id + ': ' + dato.name + '</li>');
        });
    });
});

$("#pagina_siguiente").click(function(){
    pagina++;
    $.get("https://rickandmortyapi.com/api/character?page=" + pagina, function(data){
        $("#datos").empty();    
        $.each(data.results, function(i, dato) {
            $("#datos").append('<li class="list-group-item list-group-item-dark" >' + dato.id + ': ' + dato.name + '</li>');
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
            $("#datos").append('<li class="list-group-item list-group-item-dark" >' + dato.id + ': ' + dato.name + '</li>');
        });
    });     
});






