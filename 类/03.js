"use strict";
// @ts-check
exports.__esModule = true;
var MyObject = /** @class */ (function () {
    function MyObject() {
        this.age = 20;
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
var obj = new MyObject();
console.log(obj.compareTo({ age: 18 }));
