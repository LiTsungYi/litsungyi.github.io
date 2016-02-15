"use strict"

$( "#md5Generate" ).click(function() {
	var message = $( "#md5Value" ).val();
	var length = message.length;
	var lengthBit = length * 8;
	
	var paddingLength = lengthBit % 512;
	if ( paddingLength >= 448 ) {
		paddingLength = 960 - paddingLength; // 960 = 512 + 448
	}
	else {
		paddingLength = 448 - paddingLength;
	}
	
	var padding = generatePadding( paddingLength % 8 );
	
	var mod = Math.pow( 2, 64 );
	var messageLength = lengthBit % mod;
	
	//var message = value + padding + String.fromCharCode( messageLength );
	
	$( "#md5Result" ).val( md5( message) );
});



function generatePadding( length ) {
	var value = 1;
	var padding = String.fromCharCode( 0x80 );
	for ( var i = 1; i < length; ++i ) {
		padding += String.fromCharCode( 0 );
	}
	
	return padding;
}
