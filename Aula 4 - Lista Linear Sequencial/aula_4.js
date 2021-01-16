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

(function (l, busca){
    var i= 0
    while(i < l.length && l[i] != busca) i++
    if(i != l.length) console.log(`Resultado da pesquisa ${l[i]}, encontrado no índice ${i}`)
})(lista, 5);


function buscaListaSentinela(l, b) {
    i = 0;
    l[l.length] = b
    while(l[i] != b){
        i++
    }
    if(i != l.length){
        console.log(l[i])
        console.log(l)
        return i
    }
}

//buscaLista(lista, 7)
//buscaListaSentinela(lista, 7)