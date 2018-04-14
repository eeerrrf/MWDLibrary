$(document).ready(function(){
    
    //clicking button to get input
    $("button").click(function(){
        var input = $("input").val();
        API(input);
    });
    
   
    //API for a link u guys could change
    function API(searchTerm){
        
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=" +searchTerm+ "inauthor:",
            method: "GET",
            success: function(response) {
                //clear the container so that they can search up the books
          $("#details").empty();
                //console.log(response);
                //var image = response.items[0].volumeInfo.imageLinks;
                
                //console.log(image);
                //appendBookInformationToBody("<img src="+image+">");
                
                var author = response.items[0].volumeInfo.author;
                //appendBookInformationToBody(author);
                
                var title = response.items[0].volumeInfo.title;
                var book = response.items[0].volumeInfo;

                appendBookInformationToBody(book);
            },
            });
        } 
    
    
    
    
    function appendBookInformationToBody(book) {
        console.log(book);
        $("body").append(); 
    
}

    
    
});