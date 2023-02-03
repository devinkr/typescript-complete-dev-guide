import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const charSorter = new Sorter(charactersCollection)
charSorter.sort();
console.log(charactersCollection.data)
