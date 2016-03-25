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
        //sprite.changeX(200);
        //sprite.changeY(300);
        //sprite.rotateClockwise(90);
        //sprite.rotateCounterclockwise(30);
        //sprite.rotateCounterclockwise(45);
        //sprite.setPosition(100, 150);
        //sprite.setX(200);
        //sprite.setY(50);
    },

    stop: function() {

    }
};

});


