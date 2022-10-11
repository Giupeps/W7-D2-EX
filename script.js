class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ageDifference(persona) {
    if (persona.age > this.age) {
      console.log(`${persona.name} è più vecchio di ${this.name}`);
    } else {
      console.log(`${persona.name} è più giovane di ${this.name}`);
    }
  }
}

let p1 = new Person("Giorgio", 25);
let p2 = new Person("Sara", 32);
let p3 = new Person("Mario", 29);

p2.ageDifference(p3);
p1.ageDifference(p3);
p1.ageDifference(p2);
p2.ageDifference(p1);

// --------------------------------------------------------------------------

class Pagination {
  items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  pageSize = 10;

  showList() {
    for (let i = 0; i < this.pageSize; i++) {
      const element = this.items[i];
      let box = document.getElementById("element-container");
      box.innerHTML += `<div>${element}</div>`;
    }
  }
}

let prodotti = new Pagination();
prodotti.showList();
