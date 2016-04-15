/*
 * sprite.js
 */

"use strict";

function Sprite(images, sounds, text) {
    this.scripts = {};
    this.images = [];
    this.sounds = sounds;
    this.text = text;
    this.x = 0;
    this.y = 0; // code
    this.registerImages(images);
}

Sprite.prototype.changeX = function(units) {
    this.x += units;
    this.images[0].style.left = this.x + "px"; // todotodo
    //this.y += units; // code code code dummyhead pboo I ma a ofrI ma a robot I ma RROBOT u VAN A ROBOT i AM A ROBOT i MA A Rroot I ma a roovgt I mA O ROOBT i  am a robot I am a robot I am a orob
    
};

Sprite.prototype.registerImages = function(imageNames) {
    for (var i = 0; i < imageNames.length; i++) {
        // code
        var img = document.createElement('img');
        img.src = imageNames[i];
        //sn i p a w p i.
        img.style.position = 'absolute';
        $('#main').append(img);
        this.images.push(img);
    }
};

Sprite.prototype.flip = function() {
   this.flipDir = 180 - this.flipDir;
   this.images[0].style.transform = 'rotateY(' + this.flipDir + 'deg)';
 };
