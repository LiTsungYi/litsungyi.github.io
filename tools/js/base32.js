#! /usr/bin/env node

// Ref. "Wiki" https://en.wikipedia.org/wiki/Base32
// Ref. "RFC 4648" https://tools.ietf.org/html/rfc4648

function Base32Encode( message ) {
  var codeMap = "ABCDEFGHIJKLMNOPQUSTUVWXYZ234567";
  if (null == message) {
    return "";
  }

  var charCode = 0;
  for (var i = 0; i < message.length; ++i) {
    var char = message[i];
    charCode = message.charCodeAt(i);
    code = ( code << 6 )
  }

}


function Base32Decode( message ) {

}
