/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        const
            headerArr = ['General'],
            listArr = ['list-general'],
            topRated = data.discography.topRated,
            general = data.discography.recordings,
            defaultTopRatedImagePath = topRated[0].art,
            defaultGeneralImagePath = general[0].art;
            
        const defaultTopRatedImage = $('<img>')
                .addClass('image-recording')
                .attr('id', 'image-top-rated')
                .attr('src', defaultTopRatedImagePath);
                
        const defaultGeneralImage = $('<img>')
                .addClass('image-general')
                .attr('id', 'image-recording')
                .attr('src', defaultGeneralImagePath);
                $("#header-general").after(defaultGeneralImage);
                
                
        _.each(headerArr, function(name){
            var myNewElement = $("<header>"+name+"</header>");
            $('.sidebar').append(myNewElement);
        });
        
            
        $('#header-top-rated').after(defaultTopRatedImage);
        $('.sidebar').append(defaultGeneralImage);    
        // 1.create a list of items per recording //
        
        const topRatedListItems = _.map(topRated, function(recording, i){
            return $('<li>')
                .addClass('recording')
                .attr('index', i)
                .attr('type', 'top-rated')
                .data('recording', recording)
                .text(recording.title);
        });
        
        const generalListItems = _.map(general, function(recordings, g){
            return $('<li>')
                .addClass('general-recording')
                .attr('index', g)
                .attr('type', 'general')
                .data('recording', recordings)
                .text(recordings.title);
        });
        $("#list-general").append(generalListItems);
        // 2.append them to #list-top-rated //
        $('#list-top-rated').append(topRatedListItems);
        $('.recording').on('click', function(event){
            const 
                $listItem = $(event.currentTarget),
                type = $listItem.attr('type'),
                recording = $listItem.data('recording');
                
             // which list was clicked?
            // if top rated, target the #image-top-rated || general,
            // use jQUery to swap out attr('src',recording.art)
            let imageSelector = `#image-${type}`;
            $(imageSelector).attr('src', recording.art);
            
            
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


