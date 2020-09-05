const mongoose = require("mongoose");
const employees = require("../models/employees.js");

mongoose.connect("mongodb://localhost/employees", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const employeeInformationSeed= [
    {
        "firstname": "Harvey",
        "lastname": "Dent",
        "department": "Legal",
        "title": "District Attorney",
        "manager": true,
        "pay": 190000
    },
    {
        "firstname": "Bruce",
        "lastname": "Wayne",
        "department": "Executive",
        "title": "CEO Wayne Enterprises",
        "manager": true,
        "pay": 20000000
    },
    {
        "firstname": "Dick",
        "lastname": "Grayson",
        "department": "Circus",
        "title": "Acrobat",
        "pay": 20000
    },
    {
        "firstname": "Tony",
        "lastname": "Stark",
        "department": "Board of Directors",
        "title": "Chairman of the Board, Stark Enterprises",
        "manager": true,
        "pay": 10000000
    },
    {
        "firstname": "Steve",
        "lastname": "Rogers",
        "department": "Officer",
        "title": "Captain",
        "manager": true,
        "pay": 85000
    },
    {
        "firstname": "Pepper",
        "lastname": "Potts",
        "department": "Executive",
        "title": "CEO Stark Enterprises",
        "manager": true,
        "pay": 3000000
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "department": "Student",
        "title": "The Boy Who Lived",
        "pay": 0
    },
    {
        "firstname": "Ron",
        "lastname": "Weasley",
        "department": "Student",
        "title": "Harry's Friend",
        "pay": 0
    },
    {
        "firstname": "Bruce",
        "lastname": "Banner",
        "department": "Reaserch adn Development",
        "title": "Research Scientist",
        "manager": true,
        "pay": 120000
    },
    {
        "firstname": "Donald",
        "lastname": "Duck",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Member",
        "pay": 75000
    },
    {
        "firstname": "Daisy",
        "lastname": "Duck",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Member",
        "pay": 75000
    },
    {
        "firstname": "Minny",
        "lastname": "Mouse",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Member",
        "pay": 75000
    },
    {
        "firstname": "Mickey",
        "lastname": "Mouse",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Owner",
        "manager": true,
        "pay": 150000
    },
    {
        "firstname": "Chip",
        "lastname": "unknown",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Member",
        "pay": 75000
    },
    {
        "firstname": "Dale",
        "lastname": "unknown",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Member",
        "pay": 75000
    },
    {
        "firstname": "Pluto",
        "lastname": "unknown",
        "department": "Mickey Mouse Clubhouse",
        "title": "Club Member",
        "pay": 75000
    }
];

employees.deleteMany({})
.then(() => employees.insertMany(employeeInformationSeed))
.then(() => {
    console.log(" records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});