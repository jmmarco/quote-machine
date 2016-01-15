// Main function
var main = {
    quotes: ["Let go off the ego -- Anonymous", "Embrace failure, when it happens don't freak out. Learn from it -- Anonymous",
        "Fail fast and make changes quickly -- Anonymous", "Become vulnerable, don't be afraid to admit mistakes -- Anonymous",
        "Leave your old self behind -- Anonymous", "I find your lack of faith disturbing. -- Darth Vader",
        "Your focus determines your reality –- Qui-Gon Jinn", "Do. Or do not. There is no try. -- Yoda"
    ],
    display: function() {
        // Randomize the quotes array and display them
        var randomizer = main.quotes[Math.floor(Math.random() * main.quotes.length)];
        $('.jumbotron').fadeIn(900);
        $('.quotes').html(randomizer);

        // Activate Tooltips and set trigger mode
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover'
        });


        // Bind the button to the click handler
        $('#button').click(function(event) {
            randomizer = main.quotes[Math.floor(Math.random() * main.quotes.length)];
            $('.quotes').html(randomizer);

            // Generate the Twitter base URL and append the current quote
            var baseUrl = 'https://twitter.com/intent/tweet?text=';
            baseUrl += $('.quotes').text();
            $('#twitter').attr('href', baseUrl);
        });

        // Generate a new URL to force refresh of background-image
        $('#bg-refresh').click(function(event) {
            var urls = ['url(https://source.unsplash.com/category/technology/600x301)', 'url(https://source.unsplash.com/category/technology/600x302)',
                'url(https://source.unsplash.com/category/technology/600x303)', 'url(https://source.unsplash.com/category/technology/600x304)'
            ];
            var randomUrl = urls[Math.floor(Math.random() * urls.length)];
            $('.jumbotron').fadeOut(600);
            $('.jumbotron').css('background-image', randomUrl).fadeIn(1100);
        });

        // Make sure jumbotron font color defaults to white
        $('.jumbotron').addClass('white');

        // Change font color on click
        $('#font-toggle').click(function() {
            if ($('.jumbotron').hasClass('white')) {
                $('.jumbotron').removeClass('white').addClass('black');
            }
            else if ( $('.jumbotron').hasClass('black') ) {
                $('.jumbotron').removeClass('black').addClass('white');
            }
        });

        // Twitter Stuff
        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));
    }
};

$(document).ready(main.display);
