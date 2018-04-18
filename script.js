$(document).ready(function(){
    
    //clicking button to get input
    $("button").click(function(){
        var input = $("input").val();
        API(input);
    });
    
   
    //API for a link u guys could change
    function API(searchTerm){
        
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=" +searchTerm,
            method: "GET",
            success: function(response) {
                console.log(response);
                //clear the container so that they can search up the books
                $("#details").empty();
                 if (response.items.volumeInfo > 10) {
                   var maximum = 10;
                   } else {
                       var maximum = response.items.length;
                   }
                   
                   for (var i = 0; i < maximum; i++) {
                     var title = response.items[i].volumeInfo.title;
                     var author = response.items[i].volumeInfo.authors[0];
                     var image = response.items[i].volumeInfo.imageLinks.thumbnail;
                     appendBookInformationToBody (title, author, image);
            }
            }
            });
            
            
        } 
    
    
    
    
    
    function appendBookInformationToBody(title, author,image) {
        console.log(title, author, image);
        $("#details").append("<div class='book'>" + 
        "<img src='"+image+"'/>"+"Title:"+title +"Author:"+ author+
        "</div>"); 
    
}

    
    
});