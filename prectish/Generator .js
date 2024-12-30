// Generator function
// function* generateNumbers() {
//     yield "shivani";  
//     yield "gour"; 
//     yield  8269545566 
// }


// const generator = generateNumbers();
// console.log(generator.next().value); 
// console.log(generator.next().value);  
// console.log(generator.next().value); 
// console.log(generator.next().value);  

let input = document.getElementById("input"); 
    let bt = document. getElementById("btn"); 
    let ul = document.getElementById("order"); 

    bt.addEventListener("click", function () {
        let num1 = input.value;
        if (num1) {
            
            let li = document.createElement("li");
            li.textContent = num1;
            ul.appendChild(li);

            input.value = "";
        }
    });