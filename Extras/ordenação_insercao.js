var megaLista = []

function verificaLista(l, num) {
    var k = 0;
    while (k < l.length && l[k] != num) {
        k++
    }
    if (k != l.length) {
        return true
    }
    return false
}

for (var i = 0; i < 50; i++) {
    var randonNumber = Math.floor(Math.random() * 100) + 1
    if (!verificaLista(megaLista, randonNumber)) {
        megaLista.push(randonNumber)
    }
}
console.log(megaLista)


function insertionSort(lista) {
    var n = lista.length
    for (var j = 0; j <= n; j++) {
        var chave = lista[j]
        var i = j - 1
        while (i >= 0 && lista[i] > chave) {
            lista[i + 1] = lista[i]
            i = i - 1
            lista[i + 1] = chave
        }
    }
    return lista;
}

console.log(insertionSort(megaLista))