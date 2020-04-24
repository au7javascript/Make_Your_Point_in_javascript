res1 = [];
res2 = [];
function f4() {
    function f5() {
        console.log("from f5", i);
    }
    let i = 10;
    // console.log("calling f5")
    f5();
    res1.push(f5);
    res1.push( {fm:function cat(){
        console.log("from cat",i);
        i=20;
        console.log("changing i to 20")
    }} );
    res1.push( {i} );
    // console.log("incrementing i")
    i++ ;
    res2.push(f5,{i})
    // console.log("returning from f4")
}
// console.log("calling f4")
it = f4();
// console.log("Extracting res1 and res2")
res1[0]();
res1[1].fm();
console.log(res1[2]);
res2[0]();
console.log(res2[1]);