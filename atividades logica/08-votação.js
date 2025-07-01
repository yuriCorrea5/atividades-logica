let idade = Number(prompt("Digite qual sua é idade, para podemos saber se voce pode votar!"))

if(idade < 16){
    alert("você ainda não pode votar")
}
if(idade >= 16 && idade < 18){
    alert("Você pode votar, porem não é obrgatorio")
}
if(idade >= 18 && idade < 65){
    alert("Você é obrigado a votar")
}
if(idade >= 65){
    alert("Você pode votar, porem não é obrgatorio")
}