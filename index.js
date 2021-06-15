const lodash = require("lodash");

const data1 = [
  {
    age: 3,
    name: "Curtis Greene",
    email: "curtis.greene@zaj.ca",
  },
  {
    age: 23,
    name: "Nikki Lowe",
    email: "nikki.lowe@darwinium.tv",
  },
  {
    age: 39,
    name: "Barr Copeland",
    email: "barr.copeland@nipaz.me",
  },
];
const data2 = [
  {
    age: 29,
    name: "Calhoun Woodward",
    email: "calhoun.woodward@medmex.info",
  },
  {
    age: 21,
    name: "Leta Lee",
    email: "leta.lee@qnekt.com",
  },
  {
    age: 40,
    name: "James Dinh",
    email: "j.dink@erw.com",
  },
];

// Task 1

const indexUser = lodash.findIndex(data1, function (n) {
  return n.age === 23;
});

// Task 2

const combineData = lodash.unionWith(data1, data2);

// Task 3

const newData1 = data1.map((user) => lodash.pick(user, ["name", "email"]));

// Task 4

const defaultObj = {
  age: 40,
  name: "James Dinh",
  email: "j.dink@erw.com",
};

const { age, ...newObj } = defaultObj;
const changedObj = newObj;
