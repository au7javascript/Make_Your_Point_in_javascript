function callViaTimeOut(n){
    if(n<=0){
        return
    }
    setTimeout(callViaTimeOut,0,n-1); //setTimeout(function_to_be_called,after time,parameters_of_function)
    console.log(n)
}

function callDirectly(n){
    if(n<=0){
        return
    }
    callDirectly(n-1);
    console.log(n)
}


//console.log("Calling callViaTimeOut(1)");
callViaTimeOut(3);
//console.log("Execution returned from callViaTimeOut");
//console.log("Calling callDirectly(1)");
callDirectly(3);
//console.log("Execution returned from callDirectly. No further line of code to execute/Not really.");
