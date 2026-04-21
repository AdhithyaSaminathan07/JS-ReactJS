let newPromise = new Promise ((Fullfilled,Failed)=>{
    // let dataReceived = true;
    let dataReceived = false;
    

    if(dataReceived){
        Fullfilled("Data Fetched success Fully")
    }else{
        // Failed("Data Not Found")
        throw new Error ("Search For Proper Data")
    }
})

// newPromise.then(message => console.log(message))

// try{
//     let message = await newPromise;  // await is only return the resolve
//     console.log(message);
// }
// catch(error){
//              console.log(error);
             
// }
// finally{
//     console.log("Final");
    
// }


async function executePromise(){
    try{
    let message = await newPromise;  // await is only return the resolve

    let newmessage = await newPromise;

    console.log(message);
    console.log(`Next message: ${newmessage}`);
    
}
catch(error){
            //  console.log(error);
             console.log(error.message);
             
}
finally{
    console.log("Final");
    
}
}


executePromise()
console.log("Last");
