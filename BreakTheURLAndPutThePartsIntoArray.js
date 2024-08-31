//  Write a JavaScript program to break an URL address and put its parts into an array.

// Note: url structure : ://.org[/] and there may be no part in the address.

var url = "https://www.w3resource.com/javascript-exercises/";

var data = url.split("://");
var protocol = data[0];

data = data[1].split(".com");
var domain = data[0];

data = data[1].split("/");

if (data[1]) {
  console.log([protocol, domain, data[1]]);
} else {
  console.log([protocol, domain]);
}
