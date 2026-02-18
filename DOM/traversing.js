// parent


function traversingParent(){

    let getparent = document.querySelector(".child1")
    
    console.log(getparent.parentElement);
    
    console.log(getparent.parentNode);
    
    let getparent1 = document.querySelector("html")
    
    console.log(getparent1.parentElement);
    console.log(getparent1.parentNode);
}


// Node --> Element Node,text Node,Attribute node,document

// Child

function selecteChild(){

    let getElementsByName = document.querySelector(".parent")

    console.log(getElementsByName.childElementCount);
    console.log(getElementsByName.childNodes);   // Text Node and Element Node -->Node List
    console.log(getElementsByName.children);   // Only Elements Node --> HTML Collection
    console.log(getElementsByName.firstChild);   // To Select the First Child 
    console.log(getElementsByName.firstElementChild);   // To Select the First Element Child  
    console.log(getElementsByName.lastChild);   // To Select the Last Child  
    console.log(getElementsByName.lastElementChild);   // To Select the Last Element Child  
    
}


//Siblings

function selecteSiblings(){
    let child1 = document.querySelector(".child1")
    console.log(child1.nextSibling);   //To Selecte the Text after text node 
    console.log(child1.nextElementSibling); 
    console.log(child1.previousSibling); // to selecte the text previous text node
    console.log(child1.previousElementSibling); // to selecte the Previous Element
    

}



