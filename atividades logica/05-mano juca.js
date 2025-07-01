// faça um algoritmo que leia o numero da palestra que ele quer participar e mostre o local e o horário que ela acontecerá
// animação com scratch laboratório 305, 19h;
// Scratch para gamers, laboratorio 512, 20h;
// JavaScript para leigos, laboratorio 101, 19h;
//Tópicos avançados de JavaScript, laboratorio 305, 20h;
//vida e carreira, auditorio, 21h;

let numero = Number(prompt("qual o numero da palestra que você gostaria de participar?"))

if(numero == 1 ){
    alert(" A palestra de animação com scratch, acontecera no laboratório 305, as 19h")
}else if(numero == 2){
    alert(" A palestra de Scratch para gamers, acontecera no  laboratorio 512, as 20h")
}else if(numero == 3){
    alert("A palestra de JavaScript para leigos,acontecera no laboratorio 101, as 19h")
}else if(numero == 4){
    alert(" A palestra sobre Tópicos avançados de JavaScript, acontecera no laboratorio 305, as 20h")
}else if(numero == 5){
    alert(" A palestra sobre vida e carreira,acontecera no  auditorio, as 21h")
}
else{
    alert("não temos esse numero de palestras ")
}