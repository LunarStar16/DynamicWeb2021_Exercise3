


//var imgURL = chrome.runtime.getURL("images/Test1.jpg");

function Quote(image, title, author, tags, color) {
    this.src = image;
    this.title = title;
    this.author = author;
    this.tags = tags;
    this.color = color;
    this.display = function(){
        
        var container = $("<div>")
        this.tags.forEach(function(tag){
            container.addClass(tag);     
        })
        container.css("background", this.color)
        container.addClass("quote")
        
        var quoteString = "";
        quoteString += "<img src='" + this.src + "'>";
        quoteString += "<h3>" + this.title + "</h3>";
        quoteString += "<cite>" + this.author + "</cite>";
        
        container.html(quoteString)
        $(".quotes").prepend(container)
    }
}

var quotes = [
    new Quote(
        "images/Test1.jpg",
        "title",
        "Author",
        ["tag1", "tag2"],
        "#0a3410"),
    new Quote(
        "images/Test1.jpg",
        "title",
        "Henry Matisse",
        ["painting", "creativity"],
        "lightblue"),
    new Quote(
        "images/Test1.jpg",
        "title",
        "Me",
        ["tag", "creativity"],
        "lavender")
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