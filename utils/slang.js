'use string';
const fs = require('fs');
const slangDictionaryFilePath = __dirname + '/../assets/slang_dictionary.json';

// only to prepare dictionary as JSON 
function prepareAssetFile() {
    let teenDictionary = [];
    let content = fs.readFileSync(__dirname + '/../assets/slang_temp.txt').toString().split(/\r?\n/);

    content.forEach((line) => {
        let keyValue = line.split(':');
        teenDictionary.push({
            term: keyValue[0].trim(),
            definition: keyValue[1].trim()
        });
    });

    fs.writeFileSync(__dirname + '/../assets/teen_dictionary.json', JSON.stringify(teenDictionary));    
}

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            err ? reject(err) : resolve(data);            
        })
    });
}

function translate(slangWord) {
    return readFile(slangDictionaryFilePath).then((data) => {
        let slangDictionary = JSON.parse(data);
        let definitions = slangDictionary.filter((word) => { return word.term.toLowerCase() === slangWord.trim().toLowerCase(); });
        
        if (!definitions.length) {
            return Promise.reject(`Definition for ${slangWord} not found!`);
        }

        return definitions;
    })
}

module.exports = {
    translate
}