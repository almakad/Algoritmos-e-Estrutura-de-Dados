class PesoAltura {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    };

}
let alturaMaxima = 1.8
var pessoa1 = new PesoAltura(70, 1.85)
if (pessoa1.altura > alturaMaxima) return 'Ultrapassou a altura permitida'
console.log(pessoa1)