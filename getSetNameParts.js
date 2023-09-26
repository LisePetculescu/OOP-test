function constructNameParts(fullName, age) {
  const NameParts = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    age: 0,
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
      this.age = age;
    },
    get age() {
      if (!this.age) {
        return this.age;
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
console.log("Age", student.age);
console.log("Name", student.fullName);
