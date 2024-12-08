

// function readNum(n) {

//     let box = [n];
//     // box.push(n)
//     if (n % 2 === 0) { // even
//         box.push(n / 2)
//         // return n / 2;
//     } else { // odd
//         box.push((n * 3) + 1);
//     }

//     console.log(box)
// }

// readNum(10);



function readNum(n) {

    let arr = [n];

    for (let i = 0; i < arr.length; i++) {
        if (n === 1) break;

        if (arr[i] % 2 === 0) { // even
            n = arr[i] / 2;

        } else { // odd
            n = (arr[i] * 3) + 1;

        }
        arr.push(n)
    }
    return arr;


}

// console.log(readNum(3))

//////////////////////////////////////////////////
const greaterThan10 = (n) => { if (n > 10) return n; }

const firstIndex = (n, i) => { return n[i]; }

const plusOne = (n) => { return n + 1; }


var filter = function (arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};

/////////////////////////////////////////////////////////////

var separateDigits = function (nums) {

    let result = [];
    for (let i = 0; i < nums.length; i++) {
     
        let number = nums[i];

        const newArr = number.toString().split('');
        const numberArrar = newArr.map(Number);

        result.push(numberArrar)
    }

    return result.flat();
};

separateDigits([13, 25, 83, 77])























