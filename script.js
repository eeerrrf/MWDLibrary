$(document).ready(function(){
    
    //clicking button to get input
    $("button").click(function(){
        $("input").val();
        
    });
    
    //API for a link u guys could change
    function API(searchTerm){
        
        
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
          

                }

            },
    
    
    
    
    
    
});