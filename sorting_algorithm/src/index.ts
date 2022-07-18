import { Sorter } from './Sorter';
import { NumbersCollection } from './Numbers';
import { CharactersCollection } from './Characters';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZCayub');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
