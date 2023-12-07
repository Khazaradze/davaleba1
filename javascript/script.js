// დავალება1
let number1 = 100;
if(number1 < 50){
    console.log("ნაკლებია 50ზე");
}else if(number1 > 20){
    console.log("მეტია 20ზე");
}else{
    console.log("შეცდომა");

}
// დავალება2
let name1 = "მარიამ";
if(name1 = "მარიამ"){
    console.log(true);
}else{
    console.log(false);
}

// დავალება3
switch(name1){
    case "მარიამ":
        console.log(true);
        break;
    default:
        console.log(false);
        
}
// დავალება4
let anything = true;
console.log(typeof(anything));

// დავალება5
let number = 10;
number = String(number);
console.log(typeof(number));