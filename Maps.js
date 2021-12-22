const result = new Map();
result.set('name', 'John', 1.53);
result.set('lastResult', null)
const countrie = {name: 'USA', population: '1,000,000'};
result.set('country', countrie);



for(const el of result) {
    console.log(el)
}

result.set('average', 33.89)
console.log(result)
result.get('average')
console.log(result.get('average'))
console.log(result.average)

result.delete('average')