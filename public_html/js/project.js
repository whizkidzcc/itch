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
        sprite.rotateClockwise(45);
        sprite.move(300);
    //    sprite.setX(300);
        sprite.flipY();
        
        var text1 = new Text('Welcome to Itch!!!', 'stage');
        var text2 = new Text('The next-gen Scratch', 'stage');
        text1.fontWeight = 'bold';
        text1.increaseFont();
        text2.fontStyle = 'italic';
        text2.decreaseFont();
        
        console.log('text1: ' + text1.fontWeight + ", " + text1.fontStyle + ", " + text1.fontSize);
        console.log('text2: ' + text2.fontWeight + ", " + text2.fontStyle + ", " + text2.fontSize);

    },

    stop: function() {

    }
};

});


