function getComputerChoice(){
    const randomnumber = Math.random();
if (randomnumber<1/3){
    return "rock";
}
else if (randomnumber<2/3){ 
    return "paper"; 
}
else {
    return "scissors";  
}
}
console.log(getComputerChoice());
