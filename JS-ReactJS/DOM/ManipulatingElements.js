function ManipulateElements(){
    let newListElement = document.createElement("li")
    
    // newListElement.innerText="Item-4"; //gives only as text for both text and HtmlElement
    // newListElement.innerHTML="<a>Link Me</a>Item-5";   //Get the element tag as tag and the text as text
    // newListElement.textContent ="<a>Link Me</a>Item-6";  //Same as innertext
    
    let input =document.querySelector("input")
    
    newListElement.innerHTML=input.value
    
    // console.log(input.value);
    // console.log(newListElement);
    
    
    let orderList = document.querySelector("ol")
    
    // orderList.append("TextNode",newListElement)  //Accept both text and node
    
    // orderList.insertBefore(newListElement,orderList.children[2]) //Added the Element before the Element

    // orderList.replaceChild(newListElement,orderList.children[1]) //Replce the position of the element we mention .
    
    // orderList.removeChild(orderList.children[0]) //Remove the child over by parent 
    
    // orderList.remove() //Remove the overall elements 
    
    
    newListElement.style.color="white"
    // newListElement.style.boxShadow="3px 3px 5px yellow"
    newListElement.style.textShadow="10px 10px 1px yellow"
    
    orderList.appendChild(newListElement) // Accept only the node
    // orderList.prepend( "TextNode",newListElement) //In prepend we can add Element Node and text Node in 0 Index



    

}