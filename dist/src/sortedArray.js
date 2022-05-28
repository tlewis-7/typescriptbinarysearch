"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortedArray = void 0;
class SortedArray extends Array {
    reversed;
    constructor(reversed = false, twoDimential = false) {
        super();
        this.reversed = reversed;
    }
    //n = array ;length
    //a = array
    binarySearch(target) {
        let left = 0;
        let right = this.length - 1;
        while (left != right) {
            var midpoint = Math.ceil((left + right) / 2);
            if (this[midpoint] > target) {
                right = midpoint - 1;
            }
            else {
                left = midpoint;
            }
        }
        //needs dimentional func
        if (this[left] == target) {
            return left;
        }
        return undefined;
    }
    binarySearchLeftMost(target) {
        let left = 0;
        let right = this.length;
        while (left < right) {
            var midpoint = Math.ceil((left + right) / 2);
            if (this[midpoint] < target) {
                left = midpoint + 1;
            }
            else {
                right = midpoint;
            }
        }
        //needs dimentional func
        return left;
    }
    binarySearchRightMost(target) {
        let left = 0;
        let right = this.length;
        while (left < right) {
            var midpoint = Math.ceil((left + right) / 2);
            if (this[midpoint] > target) {
                right = midpoint;
            }
            else {
                left = midpoint + 1;
            }
        }
        //needs dimentional func
        return right - 1;
    }
}
exports.SortedArray = SortedArray;
