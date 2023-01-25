//COLLEGARE I VARI QUADRATI ALLE PROPRIE CLASSI
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
    }
    if(i % 5==0 ) {
        square.classList.add("yellow")
    }
    else{
        square.classList.add("blue")
    }
}