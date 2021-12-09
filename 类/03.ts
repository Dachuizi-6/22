// @ts-check

interface Comparable {
  compareTo(b): number;
}

class MyObject implements Comparable {
  age: number = 20;
  compareTo(b: any): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

const obj = new MyObject();

console.log(obj.compareTo({ age: 18 }));

export {};
