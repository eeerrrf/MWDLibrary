$(document).ready(function(){
    
    //clicking button to get input
    $("button").click(function(){
        var input = $("input").val();
        console.log(input);
        API(input);
    });
    
    //API for a link u guys could change
    function API(searchTerm){
        
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q="+searchTerm+"%20potter",
            method: "GET",
            success: function(response) {
                //clear the container so that they can search up the books
          $(".container").clear();
                        //displays the book image using the title
                var url = response.thumbnail[0].images.original.url;
                $(".container").html ("<img src='+")
            },
            });
        } 
    
    
    
    
});