let arr=[1,2,3,4,5,6,7,8];
// new_arr=arr.slice(index1,index2);
//SLICE ALWAYS RETURNS AN ARRAY
let narr;
narr=arr.slice(2,5);//[3,4,5]
console.log(narr);

narr=arr.slice(2);//[3,4,5,6,7,8] index2 is set default as arr.length
console.log(narr);

narr=arr.slice(0,arr.length);//same as next one
console.log(narr);
new_arr=arr.slice();//index1 defaults as 0 and index2 defaults as arr.length(not arr.length-1)
console.log(narr);

console.log("NEGATIVE INDEX");//negative index
narr=arr.slice(-6,-3);//[3,4,5]
console.log(narr);

narr=arr.slice(-6);//[3,4,5,6,7,8] index2 is set default as arr.length
console.log(narr);

//Array containing one element
narr=arr.slice(-1);//[8]  index2 is set default as arr.length
console.log(narr);