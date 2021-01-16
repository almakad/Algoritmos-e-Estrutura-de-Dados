class PesoAltura {
  final int peso;
  final double altura;

  PesoAltura(this.peso, this.altura);
}

var pessoa1 = PesoAltura(70, 1.75);
var alturaMaxima = 1.8;
void main() {
  if (pessoa1.altura > alturaMaxima) {
    print('Peso ${pessoa1.peso} e Altura  ${pessoa1.altura} > $alturaMaxima');
  } else {
    print('Peso ${pessoa1.peso} e Altura  ${pessoa1.altura} < $alturaMaxima');
  }
}
