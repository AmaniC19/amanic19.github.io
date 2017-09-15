/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('div').css('backgroundColor','springGreen').css('color','royalBlue');
        $('#section-records').css('color','blue').css('backgroundColor','orange').css('fontSize','22px');
        // uncomment this to inspect all available data; delete when done //
        //console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


