function constructNameParts(fullName, age) {
  const NameParts = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    _age: 0,
    set fullName(fullName) {
      const names = fullName.split(" ");

      if (names.length === 3) {
        this.firstName = names[0];
        this.middleName = names[1];
        this.lastName = names[2];
      } else {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    get fullName() {
      if (!this.middleName) {
        return `${this.firstName} ${this.lastName}`;
      } else {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
      }
    },
    hasMiddleName: function () {
      if (this.middleName) {
        return true;
      } else {
        return false;
      }
    },
    set age(age) {
      this._age = age;
    },
    get age() {
      return this._age;
    },
    checkAge() {
      if (!this.age) {
        return `No age :(`;
      } else if (this.age < 18) {
        return `The student is ${this.age} and not old enough!`;
      } else {
        return `The student is ${this.age} and is old enough!`;
      }
    }
  };

  NameParts.fullName = fullName;
  NameParts.age = age;

  return NameParts;
}

const student = constructNameParts("Harry James Potter", 20);
console.log("Age:", student.checkAge());
console.log("Name:", student.fullName);

// const student1 = {};
Object.defineProperty(student, "hasMiddleName", { enumerable: false });

for (const key in student) {
  const element = student[key];
  console.log(element);
}

// console.log(student);

// const bøv = JSON.stringify(student);
// console.log(bøv);

// kan ændre property value, men ikke tilføje properties
// Object.seal(student);

// kan ikke ændre property value eller tilføje properties
// Object.freeze(student);

// student.test = "Lise";
// student.age = 55;
// console.log(student);
