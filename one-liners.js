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

//capitalize a string
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

//generate a random string of given length
const randomString = (length = 10) => Math.random().toString(36).substring(2, length + 2);

//generate a random number between min and max
const randomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

//find the number of days between two dates  //even though .getTime() is not required due to automatic conversion to milliseconds, it is used here for clarity
const daysBetween = (date1, date2) => Math.ceil(Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / (1000 * 60 * 60 * 24)));

//clear all cookies
const clearCookies = () => {
    document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
};

//generate random hex color
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;




//get query params from url


const getQueryParams = (URL)=> {
    const params = new URLSearchParams(URL.split('?')[1]);
    return Object.fromEntries(params.entries());
}
const getQueryParamsFromURL = (url) => {
    let info = JSON.parse(
        '{"' + decodeURI(url.split('?')[1]).replace(/&/g, '","').replace(/=/g, '":"') + '"}'
    )
    return JSON.stringify(info, null, 2);
}

const getParameters = (URL) => { 
  URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}'); 
  return JSON.stringify(URL); 
};
/*
Aspect              Function1                           Function2                       Function3

ApproachWeb         API                             String manipulation             String manipulation
Return type         JavaScript object               Formatted JSON string           Compact JSON string
URL decoding        Handled by URLSearchParams      Manual with decodeURI()         Manual with decodeURI()
Quote handling      Automatic                       None                            Escapes quotes
Robustness          High                            Medium                          Medium-High
Readability         High                            Low                              Low

*/

//log time from date
const timeFromDate = (date)=> date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

//check if number is even
const isEven = num => num % 2 === 0;

//find average of numbers in an array
const average = arr => arr.reduce((sum, acc) => sum + acc, 0) / arr.length;

//scroll to top of page
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//reverse a string
const reverseString = str => str.split('').reverse().join('');  

//check if array is empty
const isArrayEmpty = arr => Array.isArray(arr) && arr.length === 0;

//get selected text in browser
const getSelectedText = () => {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        return document.selection.createRange().text;
    }
    return '';
};

//shuffle an array
const shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};


//detect dark mode in browser
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//remove duplicates from an array
const removeDuplicates = arr => [...new Set(arr)];

//remove duplicates from an array but using old school method
const removeDuplicatesOldSchool = arr => {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
};