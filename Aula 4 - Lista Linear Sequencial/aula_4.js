var lista = [1, 2, 3, 4, 5, 6];

function buscaLista(l, busca) {
    var i = 0;
    while (i < l.length && l[i] != busca) {
        i++
    }
    if (i != l.length) {
        console.log(`Resultado da pesquisa ${l[i]}, encontrado no índice ${i}`)
    }
}

buscaLista(lista, 7)