const item = {
    nome: ("Leão").toUpperCase(),
    nomeCientifico:("Panthera leo"),
    tempoMediodeVida: (15),
    classe: ("Mamífero"),
    habitos: ("Vivem em bandos de até 30 leões", "Quando ficam velhos, feridos ou doentes, os leões se isolam de seu bando", 
    "Os machos lutam entre si para disputar a fêmea e vence quem for o mais forte"),
    estáExtinto: !true,
};
const item2 = {
    nome: ("Leão marinho").toUpperCase(),
    nomeCientifico: ("Otariinae"),
    tempoMediodeVida: (25),
    classe: ("Mamífero"),
    habitos: ("O leão-marinho é uma espécie que habitualmente vive em profundidades menores que 50m",
     "Distribui-se pela região costeira de ambos os lados da América do Sul, agrupando-se em locais rochosos.",
    "pode atingir cerca de 300 kg"),
    estáExtinto: !true,
};
const item3 = {
    nome: ("Mico leão dourado").toUpperCase(),
    nomeCientifico: ("Leontopithecus rosalia"),
    tempoMediodeVida: (22),
    classe: ("Mamífero"),
    habitos: ("Costumam viver em grupos de 2-8 indivíduos", "Emitem muitos sons como gritos, trinos, assovios e choros e longos chamados similares de aves", 
    "Dorme em buracos ocos de árvores abandonados por outras espécies"),
    estáExtinto: !true,
};

const arrayObj = [] 

if (item.estáExtinto === false){
    arrayObj.push(item)
    arrayObj.push(item2)
    arrayObj.push(item3)
}else {
    alert("Não foi possível concluir o push")
}


// let soma = (item.tempoMediodeVida + item2.tempoMediodeVida + item3.tempoMediodeVida);
// let media = `A média de vida entre os leões é ${soma / 3}`;

// console.log(media);
// console.log(item.estáExtinto && item2.estáExtinto && item3.estáExtinto);

//console.log(item, item2, item3);

//console.log(arrayObj);

 
/*console.log(`${item.nome} \n ${item.classe} \n ${item.habitos}`)
console.log(`${item2.nome} \n ${item2.classe} \n ${item2.habitos}`)
console.log(`${item3.nome} \n ${item3.classe} \n ${item3.habitos}`)

for (let i in arrayObj) {
    for (j in arrayObj[i]){
        console.log(arrayObj[i][j])
    }
}


function retornaitem (outra, string){
    let retonraitem = {}
    
    for (let i in outra){
        for(let j in outra[i]){
            if (outra[i][j]==string){
                retonraitem = outra[i]
            }
        }
    }
    
    console.log(retonraitem)
}

retornaitem(arrayObj, "LEÃO")//ESCREVA EM CAIXA ALTA!*/