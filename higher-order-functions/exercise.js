// Challenge 1
function addTwo(num) {
    return num + 2
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s"
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
    function map(arr, callback) {
        let newArr = [];
        for (i = 0; i < arr.length; i++) {
            let result = callback(arr[i]);
            newArr.push(result);
        }
        return newArr;
    }

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    function forEach(arr, callback) {
        for (i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }
}
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArr = [];
    array.forEach(e => newArr.push(callback(e)));
    return newArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let acc = initialValue;
    for (i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], index, array)
    }
    return acc;
}
var nums = [4, 1, 3];
var add = function (acc, num, index, array) { return acc + num; }
reduce(nums, add, 0);

//Extension 3
function intersection(arrays, ...arr) {
    var result;
    arr.forEach(e => {
        result = e.reduce((acc, cv) => {
            if (arrays.includes(cv)){
                acc.push(cv);
            } 
            return acc;
        }, [])
        arrays = result;
    })
    return result;
}



// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union() {
    var arr = [...arguments].flat()
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
//method-2
function union(arrays, ...arr) {
    let newArr = arrays.concat(arr.flat(1));
    return newArr.reduce((acc, cv) => {
        if (acc.indexOf(cv) === -1) {
            acc.push(cv)
        }
        return acc;
    }, [])

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    let obj = {}
    for (i = 0; i < array1.length; i++) {
        var upperCase = callback(array1[i]);
        if (upperCase === array2[i]) {
            // console.log(upperCase, array2[i])

            obj[array1[i]] = array2[i]
        }
    }
    return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

function multiMap(arrVals, arrCallbacks) {
    let obj = {};
    let arr = [];
    for (i = 0; i < arrVals.length; i++) {
        for (j = 0; j < arrVals.length; j++) {
            arr.push(arrCallbacks[j](arrVals[i]));
        }
        obj[arrVals[i]] = arr;
        arr = []
    }
    return obj;
}


// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
