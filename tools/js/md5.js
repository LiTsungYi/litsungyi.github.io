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

	var paddingLengthBytes = parseInt( paddingLength / 8 );
	var padding = generatePadding( paddingLengthBytes );

	var lengthPadding = generateLengthPadding( lengthBit );
	var mod = Math.pow( 2, 64 );
	var messageLength = lengthBit % mod;

	//var message = value + padding + String.fromCharCode( messageLength );

	$( "#md5Result" ).val( md5( message) );

  var x = [ 0x0000, 0xFFFF ];
  var y = [ 0x00FF, 0x00FF ];
	var andResult = md5_64bit_and( x, y );
	var orResult = md5_64bit_or( x, y );
	var xorResult = md5_64bit_xor( x, y );
	var notResult = md5_64bit_not( x, y );
	alert( "x and y = (" + andResult[0] + ", " + andResult[1] + ")" );
	alert( "x or y = (" + orResult[0] + ", " + orResult[1] + ")" );
	alert( "x xor y = (" + xorResult[0] + ", " + xorResult[1] + ")" );
	alert( "not x = (" + notResult[0] + ", " + notResult[1] + ")" );
});



function generatePadding( length ) {
	var value = 1;
	var padding = String.fromCharCode( 0x80 );
	for ( var i = 1; i < length; ++i ) {
		padding += String.fromCharCode( 0 );
	}

	return padding;
}

function generateLengthPadding( length ) {
}

// NOTE: F(x, y, z) = (x and y) or (not x and z)
function md5_f( x, y, z ) {

}

// NOTE: G(x, y, z) = (x and z) or (y and not z)
function md5_g( x, y, z ) {

}

// NOTE: H(x, y, z) = x xor y xor z
function md5_h( x, y, z ) {

}

// NOTE: I(x, y, z) = y xor (x or not z)
function md5_i( x, y, z ) {

}

// NOTE: return [x[0] and y[0], x[1] and y[1]]; where x[0], x[1], y[0], y[1] as unsigned int
function md5_64bit_and( x, y ) {
	return [ x[0] & y[0], x[1] & y[1] ];
}

// NOTE: return [x[0] or y[0], x[1] or y[1]]; where x[0], x[1], y[0], y[1] as unsigned int
function md5_64bit_or( x, y ) {
	return [ x[0] | y[0], x[1] | y[1] ];
}

// NOTE: return [x[0] xor y[0], x[1] xor y[1]]; where x[0], x[1], y[0], y[1] as unsigned int
function md5_64bit_xor( x, y ) {
	return [ x[0] ^ y[0], x[1] ^ y[1] ];
}

// NOTE: return [not x[0], not x[1]]; where x[0], x[1] as unsigned int
function md5_64bit_not( x ) {
	return [ ~x[0], ~x[1] ];
}
