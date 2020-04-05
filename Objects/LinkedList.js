//Making LinkedList with values 1,2,3,4... till value of variable "till".
//Value of "this" when "new" and "dot" operator are used. Reference-https://javascript.info/object-methods
const till=10;
let devn=function(num){
    if(num==till){
        return;
    }
    console.log(num);
    this.data=num;
    this.next={devn};
    this.next.devn(num+1);
};
ans={devn};
ans.devn(1);
console.log(ans);
console.log(ans.next.next.next.next.next.next.data);

// Alternate way. Prerequisite- familiar with new.target
devm = function (num) {
    if (num == till) {
        return ;
    }
    this.data=num;
    this.next=new new.target(num+1);
};
console.log(new devm(1));
console.log(ans.next.next.next.next.next.next.data);