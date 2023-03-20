const item = {
    nome: ("Leão").toUpperCase,
    nomeCientifico:("Panthera leo"),
    tempoMediodeVida: (15),
    classe: ("Mamífero"),
    ambiente: ("Savana"),
    estáExtinto: !true,
};
const item2 = {
    nome: ("Leão marinho").toUpperCase,
    nomeCientifico: ("Otariinae"),
    tempoMediodeVida: (25),
    classe: ("Mamífero"),
    ambiente: ("Marinho"),
    estáExtinto: !true,
};
const item3 = {
    nome: ("Mico leão dourado").toUpperCase,
    nomeCientifico: ("Leontopithecus rosalia"),
    tempoMediodeVida: (22),
    classe: ("Mamífero"),
    ambiente: ("Mata Atlântica"),
    estáExtinto: !true,
};

let soma = (item.tempoMediodeVida + item2.tempoMediodeVida + item3.tempoMediodeVida);
let media = `A média de vida entre os leões é ${soma / 3}`;

console.log(media);
console.log(item.estáExtinto && item2.estáExtinto && item3.estáExtinto);


