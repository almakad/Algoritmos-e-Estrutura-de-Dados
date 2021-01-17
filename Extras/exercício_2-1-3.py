from random import randint

lista = list()

def listGenerator(tamanho):
    while len(lista) < tamanho:
        randNumber = randint(0, 11)
        if randNumber not in lista:
            lista.append(randNumber)
       
    return lista

def buscaLinear(listas, num):
    i = 0
    while i < len(listas) and listas[i] != num:
        i+=1

    if(i != len(listas)):
        return f'O resultado da sua busca {listas[i]}, foi encontrado no índice {i}'



print(buscaLinear(listGenerator(10), 5))