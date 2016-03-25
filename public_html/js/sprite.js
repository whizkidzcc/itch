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
    this.direction = 0;
}

Sprite.prototype.registerImages = function(imageNames) {
    for (var i = 0; i < imageNames.length; i++) {
        // <img src="someImage">
        var img = document.createElement('img');
        img.src = imageNames[i];
        img.style.position = 'absolute';
        $('#main').append(img);
        this.images.push(img);
    }
};

Sprite.prototype.changeX = function(units) {
    this.setX(this.x + units);
};

Sprite.prototype.changeY = function(units) {
    this.setY(this.y + units);
};

Sprite.prototype.rotateClockwise = function(degrees) {
    this.direction += degrees;
    this.images[0].style.transform = 'rotate(' + this.direction + 'deg)';
};

Sprite.prototype.rotateCounterclockwise = function(degrees) {
    this.rotateClockwise(-degrees);
};

Sprite.prototype.setX = function(x) {
    this.x = x;
    this.images[0].style.left = this.x + "px";
};
    
Sprite.prototype.setY = function(y) {
    this.y = y;
    this.images[0].style.top = this.y + "px";
};

Sprite.prototype.setPosition = function(x, y) {
    this.setX(x);
    this.setY(y);
};

Sprite.prototype.move = function(steps) {
    console.log("Dir=" + this.direction);
    console.log("val=" + (Math.sin(this.direction * Math.PI / 180) * steps).toFixed(2));
    this.setPosition(this.x + (Math.cos(this.direction * Math.PI / 180) * steps).toFixed(2),
                     this.y + (Math.sin(this.direction * Math.PI / 180) * steps).toFixed(2));
};