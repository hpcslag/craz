const util = require('util'),
	  path = require('path'),
	  EventEmitter = require('events').EventEmitter;

function craz(){
	EventEmitter.call(this);
}

util.inherits(craz, EventEmitter);

craz.prototype.sayhello = function(){
	this.emit('sayhello',"hello!");
}

module.exports = craz;