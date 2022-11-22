const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFormat({
  name: 'formatTokens',
  formatter: function(args) {
    const fileTokens = args.dictionary.tokens;
    const template = {};
    Object.keys(fileTokens).forEach((fileIndex) => {
        template[`${fileIndex}`] = {};
        Object.keys(fileTokens[fileIndex]).forEach((tokenIndex) => {
            template[`${fileIndex}`][tokenIndex] = {};
            Object.keys(fileTokens[fileIndex][tokenIndex]).forEach((propIndex) => {
                const comment = fileTokens[fileIndex][tokenIndex][propIndex].comment;
                template[`${fileIndex}`][tokenIndex][propIndex] = `${fileTokens[fileIndex][tokenIndex][propIndex].value}${comment ? `, // ${comment}` : ''}`;
            });
        })
    });
    return JSON.stringify(template, null, 2);
  }
})

const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/tokens.config.json');
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
