var lista = []


function generateList(t) {

    for (var i = 0; i < t; i++) {
        var randonNumber = Math.floor(Math.random() * 20) + 1
        if (lista.length == 0) {
            lista.push(randonNumber)
        }
        if (!lista.includes(randonNumber)) {
            lista.push(randonNumber)
        }
        if (i == 4 && lista.length < t) {
            i--
        }
    }
    return lista;
}

function buscaLinear(l, num) {
    var i = 0

    while (i < l.length && l[i] != num) {
        i++
    }
    if (i != l.length) {
        console.log(l)
        console.log(`Resultado da pesquisa ${l[i]}, encontrado no índice ${i}`)
        return true
    }
    console.log('Número não encontrado')
    return false
}

console.log(buscaLinear(generateList(10), 15))