const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];

isoCode = franc(input);
language = langs.where('3', isoCode)

console.log(language.name)
