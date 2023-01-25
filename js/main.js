//COLLEGARE COLLEGAMENTO ALL'ID DI UL IN HTML
//CREARE 100 QUADRATI
//SUDDIVIDERLI IN BLU,FLIZZ MULTIPLI DI 3,BLIZZ MULTIPLI DI 5

const listItem = document.getElementById("lista")
console.log(listItem);


for (let i=1; i < 100 ;i++){
    const square=document.createElement("li");
    console.log(square);
    square.innerHTML=i;
    square.classList.add("box");
    listItem.append(square);
    

    if(i % 3 == 0) {
      square.classList.add("green")
      square.innerHTML = "fizz";
    }
    if(i % 5 == 0 ) {
      square.classList.add("yellow")
      square.innerHTML = "buzz";
      
    }
    if(i % 15 == 0){
      square.classList.add("red")
      square.innerHTML= "fizzbuzz";

      
    }
    else{
      square.classList.add("blue")
    }
}