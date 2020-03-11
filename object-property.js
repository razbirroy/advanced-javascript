const students = [
    {id: 123, name: 'Tutul Mama'},
    {id: 345, name: 'Ramesh'},
    {id: 567, name: 'Minaxmi'},
    {id: 667, name: 'Khuro'}
];
// const good = [];
//  for(let i = 0; i < students.length; i++){
//         const students2 = students[i];
//         const students3 = students2.id;
//         good.push(students3);
//     }
//     console.log(good);

// const extract = students.map(element => element.name);
// //good.push(extract);
// console.log(extract);

const upperStudent = students.filter(x => x.id > 400);
const upperStudent1 = students.find(x => x.id > 400);
console.log(upperStudent1);