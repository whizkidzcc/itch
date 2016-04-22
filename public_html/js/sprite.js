/*
 * sprite.js
 */

"use strict";

function Sprite(appendId, images, sounds, text) {
    this.scripts = {};
    this.images = [];
    this.registerImages(images, appendId);
    this.sounds = sounds;
    this.text = text;
    this.x = 0;
    this.y = 0;
    this.direction = 0;
    this.flipDirX = 0;
    this.flipDirY = 0;
}

Sprite.prototype.registerImages = function(imageNames, appendId) {
    for (var i = 0; i < imageNames.length; i++) {
        // <img src="someImage">
        var img = document.createElement('img');
        img.src = imageNames[i];
        img.style.position = 'absolute';
        $('#' + appendId).append(img);
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

Sprite.prototype.glide = function(toX, toY, duration) {
    this.images[0].style.animationName = 'sprite-glide';
    this.images[0].style.animationTimingFunction = 'linear';
    this.images[0].style.animationFillMode = 'forwards';
    this.images[0].style.animationDuration = duration + 's';
    
    /* CSS code
    @keyframes sprite-glide {
        from   {background-color:red; left:0px; top:0px;}
        to {background-color:red; left:200px; top:200px;}
    }
    */
   
};

Sprite.prototype.flipX = function() {
    this.flipDirX = 180 - this.flipDirX;
    this.images[0].style.transform = 'rotateX(' + this.flipDirX + 'deg)';
};

Sprite.prototype.flipY = function() {
    this.flipDirY = 180 - this.flipDirY;
    this.images[0].style.transform = 'rotateY(' + this.flipDirY + 'deg)';
};