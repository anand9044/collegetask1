// function sum(arred){
//     let sum = 0;
//     for(i=0;i<arred.length;i++){
//         sum =sum + arred[i];
//     }
//     return sum;
// }
// console.log(sum(arred));
// let sumval = arred.reduce(function func(sum,curr){
//     sum = sum+ curr;
//     return sum;
//  }, 0);
// arr =[1,12,23,43,64,45];
// let max =0;
// for(i=0;i<arr.length;i++){
//     if(max<arr[i])
//         max = arr[i];
//     return max;
// }
//next
// lext maxarr = [12,34,21,10,69,34];
// let maxval = maxarr.reduce(function maxfn(max,curr){
//     if(min>curr)max= curr;
//     return max;
// },Infinity);
// sorting aise hota h ab wrna normal se dictionary hoga
let arrsort = [1,12,34,21,10,69,34];
console.log(arrsort.sort());
function comparison(a,b){
    if(a>b)return 1;
    if(a==b)return 0;
    if(a<b)return -1;
}
console.log(arrsort.sort(comparison));
