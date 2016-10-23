var searchIcon = document.getElementById('search');

$( "#search" ).click(function() {
  $( "#searchBox" ).toggle( "fast", function() {
    // Animation complete.
  });
});

require('./css/main.scss');