'use strict';
const ttc = require('./utils/teens_typing_converter');
const slang = require('./utils/slang');

/*console.log(ttc.censorSwearWords('I fuck you!'));
console.log(ttc.censorSwearWords('This is bullshit motherfucker!'));

console.log(ttc.createHashtags('My love is awesome!'));
console.log(ttc.createHashtags('piece of shit!'));

console.log(ttc.randomCase('i love you'));*/

slang.translate('WTFABC').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});