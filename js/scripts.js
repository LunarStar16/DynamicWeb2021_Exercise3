




function Quote(quoteText, author, tags, color) {
    this.quote = quoteText;
    this.author = author
    this.tags = tags
    this.color = color
    this.display = function(){
        
        var container = $("<div>")
        this.tags.forEach(function(tag){
            container.addClass(tag);     
        })
        container.css("background", this.color)
        container.addClass("quote")
        
        var quoteString = "";
        quoteString += "<p>" + this.quote + "</p>";
        quoteString += "<cite>" + this.author + "</cite>";
        
        container.html(quoteString)
        $(".quotes").prepend(container)
    }
}

var quotes = [
    new Quote(
        '"we don\'t make mistakes, just happy little accidents."',
        "Bob Ross",
        ["painting", "mistakes"],
        "#0a3410"),
    new Quote(
        '"Creativity takes courage."',
        "Henry Matisse",
        ["painting", "creativity"],
        "lightblue")
]


//global tag list
var tagList = []
quotes.forEach(function(quote){
    quote.display();
    
    quote.tags.forEach(function(tag){
        //check to see if tag has been added to tag list
        if(!tagList.includes(tag)){
            //if it isn't added, add it
            tagList.push(tag);
            // and also make a button for it
            $(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
        }
    })
})
console.log(tagList);

$(".filter").on("click", function(){
    var tag = $(this).attr("id");
    console.log(tag);
    $(".quote").not("." + tag).hide();
    $("." + tag).fadeIn();
    
    $(".filter").removeClass("active");
    $(this).addClass("active");
})