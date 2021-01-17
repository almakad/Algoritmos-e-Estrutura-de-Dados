from random import randint
lista =  list()

def createList(tamanho):
    for x in range(1, tamanho):
        randNumber = randint(0, 50)
        if randNumber not in lista:
            lista.append(randNumber)
        x
    print(lista)
    return lista


def insertionSort(newList):
    n = len(newList)

    for j in range(n):
        chave = newList[j]

        i = j - 1

        while i >= 0 and newList[i] > chave:
            newList[i + 1] = newList[i]
            i = i - 1
        newList[i + 1] = chave

    return newList

print(insertionSort(createList(20)))