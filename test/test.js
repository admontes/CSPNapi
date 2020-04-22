  
// const binding = require('bindings')('array_buffer_to_native');
const m = require('../index');
var fs = require('fs');

// const array = Buffer.from( 'ABCDE' );
// var arr2;
// try {
//     arr2 = m.Signature(array,"Тестовый пользователь 2020");
// } catch (error) {
//     console.error('crypt', error.message);
// }

// console.log(arr2);


fs.readFile( '/home/user/prg/back/bkirequest/resp_efax1.txt', (err, data )=>{
    if(err) throw(err);
    arr = m.VerifySigSubject(data, "Стефаненко Леонид Юрьевич");
    fs.writeFile( '/home/user/prg/back/bkirequest/resp_efax1.out', arr, ()=>{} );
} );