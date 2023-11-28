nomeDoHeroi = "Iuri Alexeievitch Gagarin"
quantidadeXP = 10000
atribuicaoXP = ""

if (quantidadeXP < 1000){
atribuicaoXP = "Ferro"
}
else if (quantidadeXP >= 1001 && quantidadeXP<= 2000){
atribuicaoXP = "Bronze"
}
else if (quantidadeXP >= 2001 && quantidadeXP<= 5000){
atribuicaoXP = "Prata"
}

else if (quantidadeXP >= 5001 && quantidadeXP<= 7000){
atribuicaoXP = "Ouro"
}
else if (quantidadeXP >= 7001 && quantidadeXP<= 8000){
atribuicaoXP = "Platina"
}
else if (quantidadeXP >= 8001 && quantidadeXP<= 9000){
atribuicaoXP = "Ascendente"
}
else if (quantidadeXP >= 9001 && quantidadeXP<= 10000){
atribuicaoXP = "Imortal"
}
else if (quantidadeXP >= 10001){
atribuicaoXP = "Radiante"
}
console.log("O herói de nome " +nomeDoHeroi "está no nível de " +atribuicaoXP)