/* 
 * Text.js
 * Handles text for the sprite
 */

'use strict';

function Text(txt, cssId) {
    this.fontFamily = 'Arial';
    this.fontSize = 12; // pixels
    this.fontWeight = 'normal';
    this.fontStyle = 'normal';
    
    var textEle = document.createElement('div');
    textEle.innerHTML = txt;
    $('#' + cssId).append(textEle);
}

Text.prototype.increaseFont = function() {
    this.fontSize += 2;
};

Text.prototype.decreaseFont = function() {
    this.fontSize -= 2;
};
