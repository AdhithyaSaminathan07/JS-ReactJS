let newPromise = new Promise((resolve,reject)=>{
    let dataReceived = true;
    // let dataReceived = false;

    if(dataReceived){
        resolve("Data Received ")
    }else{
        reject("Data Not Received")
    }
})

// newPromise.then(console.log).catch(console.log)
newPromise.then((message)=>{
    console.log("Sucess :" + message);
    return "Next Sucesses" + message
})
.then((nextMessage)=>{console.log(nextMessage);
})

.catch( (error)=>{
    console.log("Failed :" + error );
})
.finally(()=>{
    console.log("End");
})


// CallBack
// function fetchprofile(Sucesscallback,errorcallback){
//     let dataReceived=true;
//     // let dataReceived=false;

//     if(dataReceived){
//         Sucesscallback("Data Received")
//     }
//     else{
//         errorcallback("Data Not Received")
//     }
// }


// fetchprofile(
//     (message)=>{
//         console.log(message);
        
//     },
//     (error)=>{
//         console.log(error);        
//     }
// )


// // Callback HEll


// function fetchprofile(Sucesscallback,errorcallback){
//     let dataReceived=true;
//     // let dataReceived=false;

//     if(dataReceived){
//         Sucesscallback("Data Received")
//     }
//     else{
//         errorcallback("Data Not Received")
//     }
// }

// fetchprofile(
//     (message) => {
//         console.log(message);

//         fetchprofile(
//             (nextMessage) => {
//                 console.log("Next Message: " + nextMessage);
//             },
//             (nextError) => {
//                 console.log("Next Error: " + nextError);
//             }
//         );

//     },
//     (error) => {
//         console.log(error);
//     }
// );
