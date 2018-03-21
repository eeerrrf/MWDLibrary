$(document).ready(function(){
    
    //clicking button to get input
    $("button").click(function(){
        $("input").val();
        
    });
    
    //API for a link u guys could change
    function API(searchTerm){
        
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=harry%20potter",
            method: "GET",
            success: function(response) {
          
            
            }
            },
        }); 
    }
    
    
    
});