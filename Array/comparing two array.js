arr1=[1,2,'a'];
arr2=[1,2,'a'];
console.log("arr1==arr2 ->",arr1==arr2);  //always false
console.log('arr1+""==arr2+"" ->',arr1+""==arr2+""); //true
console.log(arr1+"","typeof->", typeof arr1+"");

//safer way
console.log('String(arr1)==String(arr2) ->',String(arr1)==String(arr2));
