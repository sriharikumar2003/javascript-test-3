//Stack implementation using array
var arr = [1,2,3,4,5]
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);

//Rotation of array
var arr = [1,2,3,4,5];
var temp = arr[arr.length-1];
for(let i = arr.length-1 ; i>0;i--){
   
    arr[i] = arr[i-1];
}
arr[0] = temp;
console.log("Rotated array : ",arr);

//Comparing two arrays of equality
var arr2 = [1,2,3,4,5];
var arr3 = [1,2,3,5];
var flag = 0;
for(let i = 0;i<arr2.length;i++){
    if(arr2[i] != arr3[i]){
        flag =1;
    }
}
if(flag == 0){
    console.log("Both are equal");
}
else{
    console.log("Both are not equal");
}

//Longest word in a string
function Longest(text){
    let words = text.split(/\W+/);
    let Word = "";
    for(let word of words){
        if(word.length > Word.length){
            Word = word;
        }
    }
    return Word;
}
console.log(Longest("Hari is a good fellow in the classroom"));

//Finding the difference between two arrays
function difference(list1,list2){
    let val = list1.filter(item => !list2.includes(item));
    return val
}
console.log(difference([1,2,3,4,5],[3,4,5,6,7]));

//Finding maximum and minimum in an array
function maximum(arr1){
    let max = 0;
    for(let i = 0;i<arr1.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function minimum(arr1){
    let min = arr1[0];
    for(let i = 1 ;i<arr1.length;i++){
        if(arr1[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log("Maximum value: ",maximum([1,2,3,4,5]));
console.log("Minimum value: ",minimum([1,2,3,4,5]));