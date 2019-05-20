var message = "th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."
var vowels = ["o", "i", "u", "e", "a", "y"];

console.log(message);

function decodeMessage(message) {
  message = message.split('');
  
  for (var i = 0; i < message.length; i++) {
    if (parseInt(message[i]) >= 0) {
      message[i] = vowels[parseInt(message[i])];
      console.log(message[i]);
    }
  }
  
  console.log(message);

  message = message.join('');
  
  console.log(message);

  return message;
}

decodeMessage(message);