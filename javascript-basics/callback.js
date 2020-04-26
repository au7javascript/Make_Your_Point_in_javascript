// Callback Function:A callback function is a function passed into another function as an 
// argument.


function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  function alertFinished(){
    console.log('Finished my homework');
  }
  doHomework('math', alertFinished);