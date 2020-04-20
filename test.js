  
// const binding = require('bindings')('array_buffer_to_native');
const binding = require('./build/Release/csplib.node');
var fs = require('fs');

// const array = new Uint8Array(10);

// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// array[3] = 4;
// array[4] = 5;
// array[5] = 6;
// array[6] = 7;
// array[7] = 8;
// array[8] = 9;
// array[9] = 10;

const array = Buffer.from( 'ABCDE' );

console.log( array )

arr2 = binding.Crypt(array,"Тестовый пользователь 2020");
// arr3 = binding.Verify(arr2);
fs.writeFile( 'temp.sig', arr2, ( err ) =>{
    if( err ) throw err;
} )

// console.log(arr3);