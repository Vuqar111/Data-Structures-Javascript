// A Closer Look
 const names = ['John', 'Mark', 'Jane',[]];
 console.log(names[2]);
    // Output: []

 for (const el of names){
     console.log(el);
 }   
 names.push('Ahmed')

 const Johning = names.find(el => el === 'John');
console.log(Johning);
const John = names.findIndex(el => el === 'John')
console.log(John);

names.splice(2,1)
console.log(names);
