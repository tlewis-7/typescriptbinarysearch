import {SortedArray} from '../src/sortedArray';

var caseone = new SortedArray()
caseone.push(...[1,2,3,4,5,6,7])
console.log(caseone.binarySearch(4))
console.log(caseone)