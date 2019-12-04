console.log('App was loaded...');

// let str1 = {en: 'Hello', ru: 'Привет'};
// let str2 = {en: 'Hello', ru: 'Мир'};
// let str3 = {en: 'Hello', ru: 'Привет'};
// const locale = 'ru';
// // console.log('text 1 : text 2');
// console.log(`${str1[locale]}  ${str2[locale]} ${str3[locale]}`);

const person = confirm('Are you man');
const age = prompt('Enter your age:');

// if(person){
//     if(age > 20){
//         if(age < 40){
//             console.log('OK');
//         }
//     }
// }
// if(person && age > 20 && age < 40){
//     console.log('OK');
// }
// if(person){
//   if(age < 20){
//     console.log('OK male');
//   } 
// }else{
//     if(age > 30){
//         console.log('OK female');
//     }
// }
if((person && age < 20) || (!person && age >30)){
    console.log('OK female');
}