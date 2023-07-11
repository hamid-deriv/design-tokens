const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/tokens.config.json');
StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
