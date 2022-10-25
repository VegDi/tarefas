$(document). ready(function() {   
}) 
    $('form').on('submit', function(e) { 
        e.preventDefault();       
    
        const nomeTarefa= $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
    $(`<div class="listagem"> ${nomeTarefa} </div> `).appendTo(novoItem);
    
    $('.listagem').click(function() {
    $(this).css("text-decoration", "line-through");
})    
        $(nomeTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');

        
})





