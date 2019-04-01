'use strict';

const swearWords = ['arsehole', 'bitch', 'pissed', 'shit', 'dick', 'pussy', 'cunt', 'fuck'];
const censoredSwearWords = ['arseh**e', 'b*tch', 'p**sed', 'sh*t', 'di*k', 'p*ssy', 'c*nt', 'f**k'];

function yell(text) {    
    checkType(text);

    return text.toUpperCase();
}

function randomCase(text) {
    checkType(text);
    let upperCase = false;
    let lowerCase = false;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let randomNumber = Math.random().toPrecision(2) * 100; 
        if (randomNumber % 2 === 0) {
            upperCase = true;
            result += text[i].toUpperCase();
        }   
        else {
            lowerCase = true;
            result += text[i].toLowerCase();
        }      
    }

    // to be sure that output text is different that the previous
    if (lowerCase && upperCase) {
        return result;
    }
    else if (result > 2) {
        randomCase(result);    
    }

    return result;
}

function censorSwearWords(text) {
    checkType(text);
    let words = text.split(' ');
    let censoredText = '';

    for(let i = 0; i < words.length; i++) {
        let index = swearWords.findIndex((sw) => { return words[i].includes(sw);});
        if (index >= 0) {
            censoredText = censoredText.concat(' ', words[i].replace(swearWords[index], censoredSwearWords[index]));
        } else {
            censoredText = censoredText.concat(' ', words[i]);
        }
    }
    
    return censoredText.trim();    
}

function createHashtags(text) {
    checkType(text);
    let hashtags = [];
    let usedSwearWord = false;
    let words = text.split(' ');
    
    for(let i = 0; i < words.length; i++) {
        if (censorSwearWords(words[i]).indexOf('*') < 0) {
            if (words[i].length > 2) {
                hashtags.push(`#${words[i].toLowerCase().trim()}`);
            }
        } else {
            usedSwearWord = true;
        }
    }

    if (usedSwearWord) {
        hashtags.push('#swearwordsarenotcool');
    }

    return hashtags;
}

function checkType(text) {
    if (typeof(text) !== 'string') {
        throw new Error('Input value shoule be a type of string!');
    }
}

module.exports = {
    yell,
    censorSwearWords,
    createHashtags,
    randomCase
}   