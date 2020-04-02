let arr=[1,2,3,4,5,6,7,8];
let copyarr;
copyarr=arr.slice();
copyarr.push(9,10);
console.log(arr);
console.log(copyarr);
//making changes in copyarr dosen't changes copyarr which means they are two seperate memory blocks