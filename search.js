//1. Linear Search:

alert("1. Linear Search");
console.log("\n 1. Linear Search");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let key = 15;
let index = -1;
let flag = false;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    count++;
    // If element is in the array
    if (arr[i] === key) {
        flag = true;
        index = i;
        break;
    }
}

if (flag === true) {
    console.log(`Count: ${count}, Index: ${index}`);
} else {
    console.log(`Count: ${count}, Index: -1`);
}



// 2. Binary Search:

alert("2. Binary Search");
console.log("\n 2. Binary Search");
let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let lb = 0;
let ub = arr.length;
let mid = 0;
let key_1 = 15;
let index_1 = -1;
let flag_1 = false;
let count_1 = 0;

while (lb < ub) {
    count_1++;
    mid = (lb + ub) / 2;
    mid = parseInt(mid);

    if (arr[mid] === key_1) {
        flag_1 = true;
        index_1 = mid;
        break;
    } else if (arr[mid] < key_1) {
        lb = mid + 1;
    } else {
        ub = mid - 1;
    }
}

if (flag === true) {
    console.log(`Count: ${count_1} Found, Index: ${index_1}`);
} else {
    console.log(`Count: ${count_1} Not Found, Index: ${index_1}`);
}