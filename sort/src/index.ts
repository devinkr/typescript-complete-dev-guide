import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(1);
linkedList.add(-3);
linkedList.add(20);
linkedList.add(100);

linkedList.sort();
linkedList.print();
