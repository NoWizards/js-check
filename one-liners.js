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

//calculate the area of a circle given its radius
const areaOfCircle = radius => Math.PI * radius * radius;

//check if a number is prime
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

//count the occurences of a character in a string
const countCharacterOccurrences = (str, char) => {
    return str.split(char).length - 1;
};

//remove all trailing  and end spaces from a string
const trimSpaces = str => str.trim();

//generate a random number between a given range
const randomInRange = (min, max) => Math.floor(Math.random()*(max - min + 1)) + min;

//convert seconds to hours, minutes, and seconds format
const secondsToHMS = seconds => {
    const pad = (num) => String(num).padStart(2, '0');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hours)}h ${pad(minutes)}m ${pad(secs)}s`;
};


//get the last element of an array
const lastElement = arr => arr[arr.length - 1];

//sort an array of numbers in ascending order
const sortArrayAscending = arr => [...arr].sort((a,b) => a  - b);

//check if a string is a palindrome
const isPalindrome = str => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

const isPalindromeOldSchool = str => {
    str = str.toLowerCase().replace(/^a-z0-9/g,'');
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

//calculate the factorial of a number
const factorial = num => {
    if (num < 0) return undefined; // Factorial is not defined for negative numbers
    if (num === 0 || num === 1) return 1; // Base case
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

//sum all numbers in an array
const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);


//find the maximum number in an array
const maxInArray = arr => Math.max(...arr);

//const get current date in DD/MM/YYYY format
const getCurrentDate = () => {
    const date = new Date();
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
};

//convert strin to number
const stringToNumber = str => {
    const num = Number(str);
    return isNaN(num) ? null : num; // Return null if conversion fails
};

//convert string to number with error handling
const stringToNumberWithErrorHandling = str => {
    try {
        const num = Number(str);
        if (isNaN(num)) throw new Error("Invalid number");
        return num;
    } catch (error) {
        console.error("Error converting string to number:", error);
        return null; // Return null if conversion fails
    }
};

//convert string to number using parseFloat
const stringToNumberParseFloat = str => {
    const num = parseFloat(str); 
    //it works for both integers and floating-point numbers and 
    // handles leading/trailing spaces and cases with mixed data like "125.5px" = 125.5
    return isNaN(num) ? null : num; // Return null if conversion fails
};

//find the first N fibbonacci numbers
const fibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

//count number of words in a string
const countWords = str => {
    return str.trim().split(/\s+/).length; // Split by whitespace and count
};

//reverse an array
const reverseArray = arr => arr.slice().reverse(); // Use slice to create a shallow copy before reversing

//reverse an array using old school method
const reverseArrayOldSchool = arr => {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
};

//get the current year
const getCurrentYear = () => new Date().getFullYear();

//check if a string is empty
const isStringEmpty = str => typeof str === 'string' && str.trim() === '';



//check if an object has a specific property
//Checks if the object has the property as its own property (not inherited)
const checkObjectProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

//Checks if the property exists anywhere in the object's prototype chain
const hasProperty = (obj, prop) => prop in obj;


//find the maximum value of a property in an array of objects
const maxPropertyInArray = (arr, prop) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return Math.max(...arr.map(item => item[prop]));
};

//check if a string starts with a specific substring
const startsWith = (str, substring) => str.startsWith(substring);

const f = (string)=> {
    string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

}

//conver a string to title case
const toTitleCase = str => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

//check if array contains a specific value
const arrayContains = (arr, value) => arr.includes(value);

//convert array to comma-separated string
const arrayToCommaString = arr => arr.join(', ');


//check if a year is a leap year
const isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

//find the index of an element in an array
const indexOfElement = (arr, element) => arr.indexOf(element);

//convert mins to hours and minutes
const minsToHoursAndMins = mins => {
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
};

//check if an array is sorted in ascending order
const isArraySorted = arr => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
};

//check if array is sorted in ascending order using every
const isArraySortedEvery = arr => {
    return arr.every((value, index) => index === 0 || value >= arr[index - 1]);
};

//remove a specific element from an array
const removeElementFromArray = (arr, element) => {
    return arr.filter(item => item !== element);
};
//remove a specific element from an array using old school method
const removeElementFromArrayOldSchool = (arr, element) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};


//truncate a string to a specific length
const truncateString = (str, length) => {
    if (str.length <= length) return str;
    return str.slice(0, length-3) + '...';
};

//find the difference between two dates in days
const dateDifferenceInDays = (date1, date2) => {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
};

//check if a string is a valid email
const isValidEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// check if object is function
const isFunction = obj => typeof obj === 'function';

//convert binary to decimal
const binaryToDecimal = binary => {
    return parseInt(binary, 2);
};

//check if all elements in an array are unique
const hasUniqueElements = arr => new Set(arr).size === arr.length;

//find the greatest common divisor (GCD) of two numbers
const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

//calculate the lcm (least common multiple) of two numbers
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

//find longest word in a string
const longestWord = str => {
    return str.split(' ').reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
};

//find the longest prefix in an array of strings
const longestCommonPrefix = (strs) => {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }
    return prefix;
};

//get the ascii value of a character
const asciiValue = char => {
    return char.charCodeAt(0);
};

//check if a string is an anagram of another string
const isAnagram = (str1, str2) => {
    const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
};

