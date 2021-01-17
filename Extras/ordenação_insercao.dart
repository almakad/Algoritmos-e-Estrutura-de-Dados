import 'dart:math';

List lista = [];

randonNumbers(int tamanho) {
  var rng = Random();
  for (var i = 0; i < tamanho; i++) {
    lista.add(rng.nextInt(100));
  }
  return lista;
}

void main(List<String> args) {
  print(randonNumbers(10));
  print(insertionSort(lista));
}

insertionSort(List newList) {
  int n = newList.length;
  for (var j = 0; j < n; j++) {
    var chave = newList[j];
    var i = j - 1;

    while (i >= 0 && newList[i] > chave) {
      newList[i + 1] = newList[i];
      i = i - 1;
    }
    newList[i + 1] = chave;
  }
  return newList;
}
