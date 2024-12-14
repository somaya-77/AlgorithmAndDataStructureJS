
// array vs. set  

// set is iterable
// you can loop to string
// uniq value
// no keys

// to replace array to set ===>  mySet = new Set(myArray)
// to replace set to array ===>  myArr = ([...mySet])

const set = new Set([1,2,3]);

set.add(4)

set.delete(1)
console.log(set.size)
// set.clear()
console.log(set.has(3))

for(el of set){
    console.log(el)
}

let x = "somaya"

for(let i = 0; i < x.length; i++){
    console.log(x[i])
}