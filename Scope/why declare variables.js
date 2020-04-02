let arr=[1,2,3,4,5,6,7,8];
console.log("Getting expected output with modfncn(), i declared");
modfncn=function (arr,j) {
    if(j>=arr.length){
        return;
    }
    let i=arr[j];
    modfncn(arr,j+1);
    process.stdout.write(i+" ");
};
modfncn(arr,0);//8,7,6,5,4,3,2,1


console.log();
console.log("Unexpected output with fncn() as i isn't declared and hence behaving as global");
fncn=function (arr,j) {
    if(j>=arr.length){
        return;
    }
    i=arr[j];                // in modfncn let i was declared
    fncn(arr,j+1);
    process.stdout.write(i+" ");
};
fncn(arr,0);//8,8,8,8,8,8,8,8

