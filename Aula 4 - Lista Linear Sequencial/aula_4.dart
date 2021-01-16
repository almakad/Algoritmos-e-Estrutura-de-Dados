List lista = [1, 2, 3, 4, 5, 6, 14, 47, 11, 9, 10];

buscaLista(List l, int busca) {
  int i = 0;
  print(l.length);
  while (i < l.length && l[i] != busca) {
    i++;
  }
  if (i != l.length) {
    return 'O resultado da pesquisa ${l[i]}, foi encontrado no índice ${i}';
  }
  return '';
}

void main() {
  print(buscaLista(lista, 10));
}
