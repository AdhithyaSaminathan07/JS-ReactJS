fetch("https://fakestoreapi.com/users/abc")
  .then((response) => {
    if(!response.ok){
        throw new Error ("Data Not Found")
    }
    else{
        return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
.catch((error)=>{console.log(error.message);
})

// fetch api using Asyc/Await

 async function fetechData(){
    try{
        let response =  await fetch("https://fakestoreapi.com/users/",{
            method:"GET"
        })
        if(!response.ok){
            throw new Error ("Data Not Fectched")
        }
            let data = await response .json()
            console.log(data[0]);     
    }
 catch(error){
    console.log(error.message);
    

}
}

fetechData()