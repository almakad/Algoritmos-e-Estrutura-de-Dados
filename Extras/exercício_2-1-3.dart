import 'dart:math';

List lista = [];

List generateList(List l, int tamanho) {
  var rnd = Random();
  for (var i = 0; i <= tamanho; i++) {
    var randNumber = rnd.nextInt(30);
    if (l.length == 0) {
      l.add(randNumber);
    }
    if (!l.contains(randNumber)) {
      l.add(randNumber);
    }
    if (i == tamanho && l.length < tamanho) {
      i--;
    }
  }
  print(l);
  return l;
}

buscaLinear(List l, int j) {
  int i = 0;
  while (i < l.length && l[i] != j) {
    i++;
  }
  if (i != l.length) {
    return 'O resultado da pesquisa ${l[i]}, foi encontrado no índice ${i}';
  }
  return 'Valor $j não encontrado';
}

void main() {
  print(buscaLinear(generateList(lista, 20), 5));
}
