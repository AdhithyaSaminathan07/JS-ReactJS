// import { loginData } from "./login.mjs";
// import { loginData as newPerson } from "./login.mjs";   //In Named function  

// import  signupData  from "./signup.mjs";

import{newEmployeeId,loginInfo} from "./login.mjs"
import sigupInfo from "./signup.mjs"

function application(){
    // console.log(newPerson);
    // console.log(signupData);
    console.log(newEmployeeId);
    loginInfo()
    sigupInfo()
    
}
application()