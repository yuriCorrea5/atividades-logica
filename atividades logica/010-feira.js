
let maças = prompt("Digite quantas maças você comprou?")
let preço1 = maças* 0.30
let preço2 = maças* 0.25

if(preço1 < 12){
    alert("Você pagará " + preço1)
}
if(preço2 >= 12){
    alert("Você pagará " + preço2)
}