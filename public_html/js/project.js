var Project;

$(document).ready(function() {
"use strict";

var spriteData = '';

Project = {
    init: function() {
        $.ajax({
            url: 'library/sprites.json',
            dataType: 'json',
            cache: false,
            success: function(result) {
                spriteData = result;
                console.log(spriteData);
                console.log('Successfully loaded sprites file');
            },
            error: function(req, status, error) {
                console.log('Error: ' + status);
            }
        });
    },

    start: function() {
        var sprite = new Sprite(['library/sprites/cat-1.svg']);
        sprite.flip();
    },

    stop: function() {

    }
};

});


