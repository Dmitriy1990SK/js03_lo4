console.log('App was loaded...');

let str1 = {en: 'Hello', ru: 'Привет'};
let str2 = {en: 'Hello', ru: 'Мир'};
let str3 = {en: 'Hello', ru: 'Привет'};
const locale = 'ru';
// console.log('text 1 : text 2');
console.log(`${str1[locale]}  ${str2[locale]} ${str3[locale]}`);