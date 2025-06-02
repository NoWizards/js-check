//convert celsius to fahrenheit
const celsiusToFahrenheit = (celsius)=> (celsius*9/5) + 32;
//convert fahrenheit to celsius
const fahrenheitToCelsius = (fahrenheit)=> (fahrenheit - 32)*5/9;

//get value of browser cookie
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// convert RGB to Hex
const rgbToHex = (r,g,b)=> "#" + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);

//copy text to clipboard
const copyToClipboard = text => navigator.clipboard.writeText(text);

//check if date is valid
const isDateValid = (...val)=> !Number.isNaN(new Date(...val).valueOf());