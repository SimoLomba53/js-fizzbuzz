//COLLEGARE I VARI QUADRATI ALLE PROPRIE CLASSI
//CREARE 100 QUADRATI
//SUDDIVIDERLI IN BLU,FLIZZ MULTIPLI DI 3,BLIZZ MULTIPLI DI 5

const ListItem = document.getElementById("lista")
console.log(ListItem);


for (let i=0; i < 100 ;i++){
    const square=document.createElement("li");
    console.log(square);
    square.innerHTML=i;
    ListItem.append(square);
    square.classList.add("box");
}