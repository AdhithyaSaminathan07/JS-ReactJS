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
    // orderList.appendChild(newListElement) // Accept only the node

    // orderList.insertBefore(newListElement,orderList.children[2]) //Added the Element before the Element

    // orderList.replaceChild(newListElement,orderList.children[1]) //Replce the position of the element we mention .

    // orderList.removeChild(orderList.children[0]) //Remove the child over by parent 

    // orderList.remove() //Remove the overall elements 

    orderList.prepend( "TextNode",newListElement) //In prepend we can add Element Node and text Node in 0 Index



    

}