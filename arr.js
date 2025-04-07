let arr = [2, 5, 6, 4, 1, 30]
console.log(arr);


//Bubble Sort
/*
let n = arr.length;
for(let i = 0;i<n-1;i++){
    for(let j =0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
} 

console.log(arr);

*/

//selection sort
/*
for (let i = 0; i < arr.length - 1; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[small] > arr[j]) {
            small = j
        }
    }
    if (i != small) {
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
}

console.log(arr);
*/


//Insertion sort
for(let i = 1;i <arr.length;i++){
    let key = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j]
        j--
    }
}
console.log(arr);