import fs from "fs/promises";

const studentArray = await getJSON();
const studentArray2 = [];

function constructNameParts(fullname) {
  const NameParts = {
    firstName: "",
    middleName: "",
    lastName: "",

    setFullName(fullname) {
      //   console.log(fullname);
      const splitName = fullname.split(" ");
      if (splitName.length === 3) {
        this.firstName = splitName[0];
        this.middleName = splitName[1];
        this.lastName = splitName[2];
      } else if (splitName.length === 2) {
        this.firstName = splitName[0];
        this.middleName = undefined;
        this.lastName = splitName[1];
      } else if (splitName.length === 1) {
        this.firstName = splitName[0];
      }
      // console.log(NameParts.firstName, NameParts.middleName, this.lastName);
    },
    getFullName(fullname) {
      if (this.hasMiddleName()) {
        console.log("Fullname:", this.firstName, this.middleName, this.lastName);
      } else {
        console.log("Fullname:", this.firstName, this.lastName);
      }
    },
    hasMiddleName() {
      //   console.log("middlename boolean:", this.middleName !== undefined);
      return this.middleName !== undefined;
    }
  };
  if (fullname) {
    // console.log("if:", fullname);
    NameParts.setFullName(fullname);
  }
  return NameParts;
}

function showNameParts(NameParts) {
  NameParts.getFullName();
  NameParts.hasMiddleName();
}

function showAllNames() {
  for (const name of studentArray2) {
    showNames(name);
  }
}

function showNames(name) {
  showNameParts(name);
}

async function getJSON() {
  const JSONdata = await fs.readFile("data.json", "utf8");
  const data = JSON.parse(JSONdata);
  console.log(data);
  return data;
}

for (const student of studentArray) {
  studentArray2.push(constructNameParts(student.fullname));
}

// showAllNames();
// constructNameParts("Lise Jensen")

// showAllNames();
// console.log(getJSON());
// showNameParts(harry);
// showNameParts(ron);
//   console.log(constructNameParts());
//   NameParts.setFullName();
// console.log(NameParts);
// harry.setFullName("Harry James Potter");
// ron.setFullName("Ron Weasley");

// console.log("");
// NameParts.setFullName("Harry James Potter");
// // console.log(NameParts);
// NameParts.getFullName();
// console.log("___________________");
// console.log("");
// NameParts.setFullName("Lise Petculescu");
// // console.log(NameParts);
// NameParts.getFullName();

// showNameParts("Lise Jensen");
