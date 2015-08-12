//Compare two arrays and return a new array with any items not found in both of the original arrays.

function diff(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) < 0) {
            newArr.push(arr1[i]);
        }
    }

    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) < 0 && newArr.indexOf(arr2[j]) < 0) {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);