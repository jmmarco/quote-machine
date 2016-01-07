var main = {
    quotes: ["Everything's looks better with toast", "Some things are better with cake", "Why did the chicken cross the road?", "Run as fast as you can", "Leave your old self behind"],
    display: function() {
        var randomizer = main.quotes[ Math.floor(Math.random() * main.quotes.length) ];
        console.log(main.quotes.length);
        $('.quotes').html(randomizer);
    }
}


main.display();
