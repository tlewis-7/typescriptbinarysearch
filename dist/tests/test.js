"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortedArray_1 = require("../src/sortedArray");
var caseone = new sortedArray_1.SortedArray();
caseone.push(...[1, 2, 3, 4, 5, 6, 7]);
console.log(caseone.binarySearch(4));
console.log(caseone);
