import {Signature} from '../index';

const array = Buffer.from( 'ABCDE' );

var ret = Signature(array, "Тестовый пользователь 2020");