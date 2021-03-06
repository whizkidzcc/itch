/*
 * sprite.js
 */

"use strict";

function Sprite(name, images, sounds, text, cssId) {
    this.scripts = {};
    this.images = [];
    this.spriteId = name;
    this.sounds = sounds;
    this.text = text;
    this.x = 0;
    this.y = 0;
    this.direction = 0;
    this.flipDirY = 0;
    this.flipDirX = 0;
    
    this.registerImages(images, cssId);

}

Sprite.prototype.changeX = function(units) {
    this.x += units;
    this.images[0].style.left = this.x + "px";
    
};

Sprite.prototype.changeY = function(units) {
    this.y += units;
    this.images[0].style.top = this.y + "px";
};

Sprite.prototype.registerImages = function(imageNames, cssId) {
    for (var i = 0; i<imageNames.length; i++) {
        var img = document.createElement('img');
        img.src = imageNames[i];
        img.id = this.spriteId + '-' + i;
        img.style.position = 'absolute';

        var divEle = document.createElement('div');
        $(divEle).append(img);
        $(divEle).draggable();
        
        $('#' + cssId).append(divEle);
        this.images.push(img);
    }
};

Sprite.prototype.rotateClockwise = function(degrees) {
    this.direction = this.direction + degrees;
    this.images[0].style.transform = "rotate(" + this.direction + "deg)"; 
};
    
Sprite.prototype.rotateCClockwise = function(degrees) {
    this.direction = this.direction - degrees;
    this.images[0].style.transform = "rotate(" + this.direction + "deg)";
};

Sprite.prototype.setX = function(position) {
    this.x = position;
    this.images[0].style.left = this.x + "px";
};
Sprite.prototype.setY = function(position) {
    this.y = position;
    this.images[0].style.top = this.y + "px";
};

Sprite.prototype.setPosition = function(x, y) {
    this.setX(x);
    this.setY(y);
};

Sprite.prototype.move = function(steps) {
    this.setPosition(this.x + (Math.cos( this.direction * Math.PI / 180) * steps).toFixed(2),
                     this.y + (Math.sin( this.direction * Math.PI / 180) * steps).toFixed(2));
};

Sprite.prototype.glide = function(x, y, duration) {
    this.images[0].style.animationName = "glide";
    this.images[0].style.TimingFunction = "linear";
    this.images[0].style.fillMode = "forwards";
    this.images[0].style.animationDuration = duration + "s";
};

Sprite.prototype.flipY = function() {
    this.flipDirY = 180 - this.flipDirY;
    this.images[0].style.transform = "rotateY(" + (this.direction + this.flipDirY) + "deg)";
};

Sprite.prototype.flipX = function() {
    this.flipDirX = 180 - this.flipDirX;
    this.images[0].style.transform = "rotateX(" + (this.direction + this.flipDirX) + "deg)";
};