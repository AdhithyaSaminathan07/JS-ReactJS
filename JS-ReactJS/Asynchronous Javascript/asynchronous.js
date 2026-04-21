function f1(){
    console.log("First");
}

function f2(){
    console.log("Second");
}
function f3(){
    console.log("Third");
}

f1()
f2()
// setTimeout(f2,3000)
f3()

// Event Loop -->
// Micro Task Queue - First Priority
// Promise

// Macro Task Queue - Second
// setTimeout
// setInterval

/*

1. Call Stack (sync code)
2. Web APIs (timers, fetch)
3. Microtask Queue (Promises, async/await)
4. Macro Task Queue (setTimeout, events)
5. Event Loop manages everything

*/