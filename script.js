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
                     var desc = response.items[i].volumeInfo.description;
                     var image = response.items[i].volumeInfo.imageLinks.thumbnail;
                     appendBookInformationToBody (title, author, image, desc);
                    
            }
            }
            });
            
            
        } 
    
    
    
    
    
    function appendBookInformationToBody(title, author,image, desc) {
        console.log(title, author, image);
        // $("#details").append("<div class='book'>" + 
        // "<img src='"+image+"'/>"+"Title:"+title +"Author:"+ author+"</div>"); 
    
    $("#details").append("<div class='book'>")  
    $("#details").append("<img src='"+image+"'/>") 
    $("#details").append("<h3> Title: "+ title + "</h3>");
    $("#details").append("<h3> Author: "+ author + "</h3>");
    $("#details").append("<h4> Description: "+ desc + "</h4>");
    $("#details").append("</div>");
    
        
}

    
    
});