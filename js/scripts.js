


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
        "images/capricorn_KirkReinert.JPG",
        "Capricorn",
        "Kirk Reinert",
        ["Fantasy", "Creature"],
        "violet"),
    new Quote(
        "images/ClairesWings_KinukoYCraft.PNG",
        "Claire's Wings",
        "Kinuko Y. Craft",
        ["Fantasy", "Fairy"],
        "black"),
    new Quote(
        "images/crystalbeams_KirkReinert.jpg",
        "Crystal Beams",
        "Kirk Reinert",
        ["Fantasy", "Fairy"],
        "violet"), 
    new Quote(
        "images/DragonDancers_JosephineWall-Surreal.jpg",
        "Dragon Dancers",
        "Josephine Wall",
        ["Fantasy", "Creature", "Surreal"],
        "black"),
    new Quote(
        "images/enchantedlakeII_KirkReinert.jpg",
        "Enchanted Lake II",
        "Kirk Reinert",
        ["Fantasy", "Landscape"],
        "violet"),
    new Quote(
        "images/fromhelltoeternity_JimWarren-surreal.jpg",
        "From Hell To Eternity",
        "Jim Warren",
        ["Fantasy", "Landscape", "Surreal"],
        "black"),
    new Quote(
        "images/isthisthereallifeorisitjustfantasy_JimWarren-Surreal.jpg",
        "Is This The Real Life... Or Is It Just Fantasy",
        "Jim Warren",
        ["Fantasy", "Creature", "Surreal"],
        "violet"),
    new Quote(
        "images/moonbabies_KirkReinert.jpg",
        "Moon Babies",
        "Kirk Reinert",
        ["Fantasy", "Creature"],
        "black"),
    new Quote(
        "images/mysteriousGarden_KinukoYCraft.jpg",
        "Mysterious Garden",
        "Kinuko Y. Craft",
        ["Fantasy", "Creature", "Landscape"],
        "violet"),
    new Quote(
        "images/WhereMoonbeamsFall_JosephineWall.jpg",
        "Where Moonbeams Fall",
        "Josephine Wall",
        ["Fantasy", "Fairy"],
        "black")
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