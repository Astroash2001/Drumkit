//Main Function

function salutations(name , callback)
{
    console.log("Hello! " + name);
    callMeback();
}

//callback Function
function callMeback()
{
    console.log("You successfullly called the call back function!");
}

//main function call
salutations("Avinash" , callMeback);

//some advance application of the callback function 

const