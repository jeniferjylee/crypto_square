// creat our Crypto class
//it takes a string as an argument
var Crypto = function(text){
	//store the string for use elsewhere
	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {

	str = "s#$%^&plunk";
	var replace = str.replace("s#$%^&", "");
	return replace;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function(){
	var length = this.normalizePlaintext().length;
	return Math.ceil (Math.sqrt(length));
};

module.exports = Crypto;