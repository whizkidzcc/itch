/*
 * sprite.js
 */

"use strict";

function Sprite(images, sounds, text) {
    this.scripts = {};
    this.images = [];
    this.registerImages(images);
    this.sounds = sounds;
    this.text = text;
    this.x = 0;
    this.y = 0;
}

Sprite.prototype.changeX = function(units) {
    this.x += units;
    this.images[0].style.left = this.x + "px";
};

Sprite.prototype.changeY = function(units) {
    this.y += units;
    this.images[0].style.top = this.y + "px";
};


Sprite.prototype.registerImages = function(imageNames) {
    for (var i = 0; i<imageNames.length; i++) {
        var img = document.createElement('img');
        img.src = imageNames[i];
        img.style.position = 'absolute';
        $('#main').append(img);
        this.images.push(img);
    }
};