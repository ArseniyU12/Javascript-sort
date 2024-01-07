const ages = [{
    name: "taras",
    age: 22
  }, {
    name: "ivan",
    age: 21
  }, {
    name: "dan",
    age: 24
  }, {
    name:"olga",
    age: 23
  }, {
    name: "arsen",
    age: 20
  }];  

// відсортувати масив, двома способами по спаданню та по зростанню.  - 1 спосіб по спаданню

const sorted = [];
while (ages.length > 0) {
    let max = 0;
    for (let i = 1; i < ages.length; i++) {
        if (ages[i].age > ages[max].age) {
            max = i;
        }
    }
    const { name, age } = ages[max];
    sorted.push({ name, age });
    console.log(`Name: ${name}, Age: ${age}`);
    ages.splice(max, 1);
  };

// другій спосіб - по зростанню

/*const ages = [{
  name: "taras",
  age: 22
}, {
  name: "ivan",
  age: 21
}, {
  name: "dan",
  age: 24
}, {
  name:"olga",
  age: 23
}, {
  name: "arsen",
  age: 20
}];  

// відсортований масив по спаданню

const sorted = [];
while (ages.length > 0) {
    let min = 0;
    for (let i = 1; i < ages.length; i++) {
        if (ages[i].age < ages[min].age) {
            min = i;
        }
    }
    const { name, age } = ages[min];
    sorted.push({ name, age });
    console.log(`Name: ${name}, Age: ${age}`);
    ages.splice(min, 1);
}*/