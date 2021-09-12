const urlEncode = function(text) {

  for (let i = 0; i < text.length; i++) {
    text = text.trim().split(" ").join("%20");
  }
  return text;

};

console.log(urlEncode("Lighthouse Labs")); // Answer Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Answer Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); // Answer blue%20is%20greener%20than%20purple%20for%20sure