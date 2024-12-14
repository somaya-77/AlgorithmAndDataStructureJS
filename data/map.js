// check for key only
// both of key and value of any data type



const map = new Map([['a',1],['b',2]])

map.set('c',3)

console.log(map.has('b'))
map.delete('a')
for(const [key, value] of map){
    console.log(key, value)
}