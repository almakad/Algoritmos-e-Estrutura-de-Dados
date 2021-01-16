lista = list(range(1, 31))

def buscaLista(listas, busca):
    i = 0
    while i < len(listas) and listas[i] != busca:
        i += 1

    if i != len(listas):
        return f'O resultado da sua busca {listas[i]}, foi encontrado no índice {i}'


print(buscaLista(lista, 30))