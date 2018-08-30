var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];




// Write a sorting function (sometimes called a custom comparator), that sorts the
// above array first by the name ascending alphabetically, and in cases where the
// names are equal sort by descending age.

var sort = students.sort(function(person1, person2) {
   var name1 = person1.name, name2 = person2.name;
   var age1 = person1.age, age2= person2.age
    if (name1 < name2)
       return -1
    if (name1 > name2)
       return 1
     if (age1 < age2)
      return 1
     if (age1 > age2)
      return -1
return 0
});

console.log(sort);
