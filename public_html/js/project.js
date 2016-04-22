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
        var sprite = new Sprite('stage', ['library/sprites/cat-1.svg']);
        sprite.setPosition(0, 0);
        //sprite.rotateClockwise(45);
        //sprite.move(600);
        //sprite.changeX(200);
        //sprite.changeY(300);
        //sprite.rotateClockwise(90);
        //sprite.rotateCounterclockwise(30);
        //sprite.rotateCounterclockwise(45);
        //sprite.setPosition(100, 150);
        //sprite.setX(200);
        //sprite.setY(50);
        //sprite.rotateClockwise(45);
        //sprite.flipX();
        //sprite.flipY();
        //sprite.glide(100, 100, 1);
    },

    stop: function() {

    },
    
    data: {
        sprites: [],
        stage: {
            
        }
    }
};

});


