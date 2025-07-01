let genero = prompt("Qual é seu gênero? (Masculino ou Feminino)")
let altura = Number(prompt("Qual sua altura?"))
let pesoidealF = (62.1 * altura) - 44.7
let pesoidealM = (72.7* altura) - 58

if(genero == "masculino"){
    alert("seu peso ideal é" + pesoidealM)
}
if(genero == "feminino"){
    alert("seu peso ideal é" + pesoidealF)
}
